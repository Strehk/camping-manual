import { usePocketBase } from '$lib/pocketbase.svelte.ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const checklists = await locals.pb.collection('checklist').getList();

	return {
		checklists
	};
};
