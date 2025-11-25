import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { z } from "zod";
import { rateLimiter } from "@/lib/ratelimit";
import { env, isUsingPlaceholders } from "@/lib/env";

// Initialize Supabase with validated environment variables
const supabase = createClient(env.supabase.url, env.supabase.serviceRoleKey);

// Initialize Resend with validated API key
const resend = new Resend(env.resend.apiKey);

// Email validation schema
const schema = z.object({
    email: z.string().email(),
});

/**
 * Get client IP address from request headers
 */
function getClientIp(req: Request): string {
    const forwarded = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");

    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }

    return realIp || "127.0.0.1";
}

export async function POST(req: Request) {
    try {
        // Rate limiting check
        const clientIp = getClientIp(req);
        const rateLimitResult = rateLimiter.check(clientIp);

        if (!rateLimitResult.success) {
            const retryAfter = Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000);
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                {
                    status: 429,
                    headers: {
                        'Retry-After': retryAfter.toString(),
                        'X-RateLimit-Limit': '5',
                        'X-RateLimit-Remaining': '0',
                        'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
                    }
                }
            );
        }

        // Parse and validate request body
        const body = await req.json();
        const { email } = schema.parse(body);

        // Sanitize email input
        const sanitizedEmail = email.toLowerCase().trim();

        // Mock success for placeholder keys (development mode)
        if (isUsingPlaceholders()) {
            // Simulate network delay
            await new Promise((resolve) => setTimeout(resolve, 1000));
            return NextResponse.json({ success: true });
        }

        // 1. Save to Supabase
        // Ensure you have a 'subscribers' table in Supabase with an 'email' column
        const { error: dbError } = await supabase
            .from("subscribers")
            .insert([{ email: sanitizedEmail }]);

        if (dbError) {
            // Handle duplicate emails gracefully
            if (dbError.code === "23505") { // Unique violation
                return NextResponse.json({ message: "Email already subscribed" }, { status: 200 });
            }

            // Log detailed error server-side only
            console.error("[Subscribe API] Database error:", {
                code: dbError.code,
                message: dbError.message,
                timestamp: new Date().toISOString(),
            });

            // Return generic error to client
            return NextResponse.json(
                { error: "Unable to process your request. Please try again later." },
                { status: 500 }
            );
        }

        // 2. Send Confirmation Email via Resend
        const { error: emailError } = await resend.emails.send({
            from: "Bookrentalapp <onboarding@resend.dev>", // Update this with your verified domain
            to: sanitizedEmail,
            subject: "Welkom bij Bookrentalapp!",
            html: `
        <h1>Bedankt voor je interesse!</h1>
        <p>Je staat op de lijst. We houden je op de hoogte van de lancering.</p>
        <p>Met vriendelijke groet,<br/>Het Bookrentalapp Team</p>
      `,
        });

        if (emailError) {
            // Log email error server-side only
            console.error("[Subscribe API] Email error:", {
                message: emailError.message,
                timestamp: new Date().toISOString(),
            });
            // We still return success because the DB save worked
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        // Handle validation errors from Zod
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Invalid email address. Please check and try again." },
                { status: 400 }
            );
        }

        // Log detailed error server-side only
        console.error("[Subscribe API] Unexpected error:", {
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined,
            timestamp: new Date().toISOString(),
        });

        // Return generic error to client
        return NextResponse.json(
            { error: "An unexpected error occurred. Please try again later." },
            { status: 500 }
        );
    }
}
