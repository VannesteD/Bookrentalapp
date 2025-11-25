"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    email: z.string().email({ message: "Voer een geldig e-mailadres in." }),
});

const FUN_RESPONSES = [
    "Sunshine incoming! ☀️",
    "You're officially cool now! 😎",
    "High five! 🙌",
    "Welcome to the club! 📚",
    "Groovy choice! ✌️",
    "Radical! 🤙",
];

export function EmailForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error("Er ging iets mis. Probeer het later opnieuw.");
            }

            setSuccessMessage(FUN_RESPONSES[Math.floor(Math.random() * FUN_RESPONSES.length)]);
            setIsSubmitted(true);
        } catch (err) {
            console.error(err);
            setError("Er ging iets mis. Probeer het later opnieuw.");
        } finally {
            setIsLoading(false);
        }
    }

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center gap-2 text-retro-dark bg-retro-green/20 p-6 rounded-xl border-4 border-retro-dark shadow-[4px_4px_0px_0px_rgba(45,55,72,1)] animate-in zoom-in duration-300">
                <Sparkles className="h-8 w-8 text-retro-dark animate-spin-slow" />
                <p className="font-black text-xl text-center">{successMessage}</p>
                <p className="font-bold text-sm opacity-80">Je staat op de lijst!</p>
            </div>
        );
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col sm:flex-row gap-3">
                <input
                    {...form.register("email")}
                    placeholder="jouw@email.nl"
                    className={cn(
                        "flex-1 px-4 py-3 rounded-xl border-4 border-retro-dark bg-white focus:border-retro-blue focus:outline-none transition-colors placeholder:text-retro-dark/40 text-retro-dark font-bold shadow-[4px_4px_0px_0px_rgba(45,55,72,1)]",
                        form.formState.errors.email && "border-retro-pink focus:border-retro-pink"
                    )}
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-3 rounded-xl bg-retro-pink text-retro-dark font-black hover:bg-retro-pink/90 hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(45,55,72,1)] active:translate-y-0 active:shadow-none border-4 border-retro-dark disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                >
                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Meld je aan"}
                </button>
            </div>
            {form.formState.errors.email && (
                <p className="text-sm text-retro-pink font-bold pl-1">{form.formState.errors.email.message}</p>
            )}
            {error && (
                <p className="text-sm text-retro-pink font-bold pl-1">{error}</p>
            )}
        </form>
    );
}
