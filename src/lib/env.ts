/**
 * Centralized environment variable validation
 * Validates all required environment variables at startup
 */

function getEnvVar(key: string, isPublic: boolean = false): string {
    const value = process.env[key];

    if (!value || value.trim() === '') {
        throw new Error(
            `Missing required environment variable: ${key}\n` +
            `Please add it to your .env.local file.\n` +
            `See README.md for setup instructions.`
        );
    }

    // Warn if placeholder values are still in use
    if (value.toLowerCase().includes('placeholder') || value.toLowerCase().includes('your-')) {
        console.warn(
            `⚠️  Warning: ${key} appears to contain a placeholder value.\n` +
            `   Please update it with your actual ${isPublic ? 'public' : 'secret'} key.`
        );
    }

    return value;
}

/**
 * Validated environment variables
 * Access these instead of process.env directly
 */
export const env = {
    supabase: {
        url: getEnvVar('NEXT_PUBLIC_SUPABASE_URL', true),
        serviceRoleKey: getEnvVar('SUPABASE_SERVICE_ROLE_KEY', false),
    },
    resend: {
        apiKey: getEnvVar('RESEND_API_KEY', false),
    },
} as const;

/**
 * Check if we're using placeholder values (for development mode)
 */
export function isUsingPlaceholders(): boolean {
    return (
        env.supabase.url.toLowerCase().includes('placeholder') ||
        env.supabase.serviceRoleKey.toLowerCase().includes('placeholder')
    );
}
