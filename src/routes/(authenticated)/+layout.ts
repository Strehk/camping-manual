import { goto } from '$app/navigation';
import { usePocketBase } from '$lib/pocketbase';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	const pb = usePocketBase();

	try {
		const user = await pb.collection('users').authRefresh();
		console.log(user);
		if (!user) throw new Error('Not logged in');
		return {
			user
		};
	} catch (e) {
		return redirect(302, '/login');
	}
};
