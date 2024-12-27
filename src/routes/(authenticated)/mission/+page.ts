import { usePocketBase } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const pb = usePocketBase();

	const missions = await pb.collection('mission').getList();

	return {
		missions
	};
};
