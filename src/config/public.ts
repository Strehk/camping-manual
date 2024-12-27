import { building } from '$app/environment';
import { env } from '$env/dynamic/public';
import { z } from 'zod';

const schema = z.object({
	PUBLIC_VERSION: z.optional(z.string()),
	PUBLIC_SHA: z.optional(z.string()),
	PUBLIC_FA_CDN_PATH: z.string(),
	PUBLIC_POCKETBASE_URL: z.string()
});

export const configPublic = building ? ({} as z.infer<typeof schema>) : schema.parse(env);
