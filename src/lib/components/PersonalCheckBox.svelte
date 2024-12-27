<script lang="ts">
	import Avatar from './Avatar.svelte';

	interface Props {
		toggleDone: () => void;
		user: any;
	}

	let { toggleDone, user }: Props = $props();

	let loading = $state(false);

	const toggle = async () => {
		loading = true;
		await toggleDone();
		loading = false;
	};
</script>

<button
	onclick={toggle}
	class="border-1 group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-zinc-900 bg-zinc-200 transition-all duration-100 hover:bg-zinc-300"
	aria-label="Check"
>
	{#if !user}
		<i
			class="fas {loading
				? 'fa-spinner fa-spin'
				: 'fa-check'} hidden text-xl text-zinc-400 {!loading &&
				'opacity-0'} group-hover:opacity-100"
		></i>
	{:else}
		<Avatar {user} />
	{/if}
</button>
