import { usePocketBase } from '$lib/pocketbase.svelte.ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const pb = usePocketBase();

	const missions = await locals.pb.collection('mission').getList();

	return {
		missions
	};
};
