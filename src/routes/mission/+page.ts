// import { usePocketBase } from '$lib/pocketbase';
import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

export const load: PageLoad = async () => {
	// const pb = usePocketBase();

	const pb = new PocketBase('http://localhost:8090');

	const missions = await pb.collection('mission').getList();

	return {
		missions
	};
};
