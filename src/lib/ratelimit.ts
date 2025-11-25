/**
 * Simple in-memory rate limiter for API protection
 * For production with multiple servers, consider using Redis-based solutions like @upstash/ratelimit
 */

interface RateLimitEntry {
    count: number;
    resetTime: number;
}

class RateLimiter {
    private requests: Map<string, RateLimitEntry> = new Map();
    private readonly maxRequests: number;
    private readonly windowMs: number;

    constructor(maxRequests: number = 5, windowMinutes: number = 60) {
        this.maxRequests = maxRequests;
        this.windowMs = windowMinutes * 60 * 1000;

        // Cleanup old entries every 5 minutes
        setInterval(() => this.cleanup(), 5 * 60 * 1000);
    }

    /**
     * Check if a request should be allowed
     * @param identifier - Unique identifier (e.g., IP address)
     * @returns Object with success status and remaining requests
     */
    check(identifier: string): { success: boolean; remaining: number; resetTime: number } {
        const now = Date.now();
        const entry = this.requests.get(identifier);

        // No previous requests or window expired
        if (!entry || now > entry.resetTime) {
            const resetTime = now + this.windowMs;
            this.requests.set(identifier, { count: 1, resetTime });
            return { success: true, remaining: this.maxRequests - 1, resetTime };
        }

        // Within rate limit
        if (entry.count < this.maxRequests) {
            entry.count++;
            this.requests.set(identifier, entry);
            return { success: true, remaining: this.maxRequests - entry.count, resetTime: entry.resetTime };
        }

        // Rate limit exceeded
        return { success: false, remaining: 0, resetTime: entry.resetTime };
    }

    /**
     * Remove expired entries from memory
     */
    private cleanup(): void {
        const now = Date.now();
        for (const [key, entry] of this.requests.entries()) {
            if (now > entry.resetTime) {
                this.requests.delete(key);
            }
        }
    }

    /**
     * Reset rate limit for a specific identifier (useful for testing)
     */
    reset(identifier: string): void {
        this.requests.delete(identifier);
    }
}

// Export singleton instance
export const rateLimiter = new RateLimiter(5, 60); // 5 requests per hour
