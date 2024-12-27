import { building } from '$app/environment';
import { env } from '$env/dynamic/private';
import { z } from 'zod';

const schema = z.object({
	NODE_ENV: z.union([z.literal('development'), z.literal('production'), z.literal('test')]),
});

export const configPrivate = building ? ({} as z.infer<typeof schema>) : schema.parse(env);
