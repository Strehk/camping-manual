import { usePocketBase } from '$lib/pocketbase.svelte.ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const sequences = await locals.pb.collection('sequence').getList();

	return {
		sequences
	};
};
