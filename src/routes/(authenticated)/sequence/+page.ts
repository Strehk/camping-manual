import { usePocketBase } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const pb = usePocketBase();

	const sequences = await pb.collection('sequence').getList();

	return {
		sequences
	};
};
