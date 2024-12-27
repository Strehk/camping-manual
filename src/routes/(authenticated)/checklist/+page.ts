import { usePocketBase } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const pb = usePocketBase();

	const checklists = await pb.collection('checklist').getList();

	return {
		checklists
	};
};
