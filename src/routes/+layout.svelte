<script lang="ts">
	import '../app.css';
	import '@fontsource/comfortaa/400.css';
	import '@fontsource/comfortaa/700.css';

	import { env } from '$env/dynamic/public';
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';
	import { usePocketBase } from '$lib/pocketbase.js';
	import { setUserContext } from '$lib/contexts/user';
	import { onDestroy } from 'svelte';
	import Logout from '$lib/components/LogoutBtn.svelte';
	import { json } from '@sveltejs/kit';
	import Footer from '$lib/components/Footer.svelte';

	let { data, children } = $props();

	// Initialize user store
	const user = writable(data.user);
	setUserContext(user);

	const pb = usePocketBase();

	if (browser) {
		// Load user from cookie (client-side only)
		pb.authStore.loadFromCookie(document.cookie);

		// Update user store when auth store changes
		const unsubscribe = pb.authStore.onChange(() => {
			user.set(pb.authStore.record);
			document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
		}, true);
		onDestroy(unsubscribe);
	}
</script>

<link href="{env.PUBLIC_FA_CDN_PATH}/css/fontawesome.min.css" rel="stylesheet" />
<link href="{env.PUBLIC_FA_CDN_PATH}/css/solid.min.css" rel="stylesheet" />

<div class="flex h-screen w-full flex-col items-start justify-start gap-4 p-4 sm:gap-10 sm:p-10">
	{@render children()}
	<Footer />
</div>

{#if $user}
	<Logout user={$user} />
{/if}
