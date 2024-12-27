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
	class="border-1 group relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border-zinc-900 bg-zinc-200 transition-all duration-100 hover:bg-zinc-300"
	aria-label="Check"
>
	{#if !user}
		<i
			class="fas {loading
				? 'fa-spinner fa-spin'
				: 'fa-check'} hidden text-xl text-zinc-900 {!loading &&
				'opacity-0'} group-hover:opacity-100"
		></i>
	{:else}
		<div class="absolute z-50 group-hover:backdrop-blur-md w-full h-full flex justify-center items-center transition-all duration-300">
			<i
				class="fas {loading
					? 'fa-spinner fa-spin'
					: 'fa-xmark'} hidden text-xl text-zinc-900 {!loading &&
					'opacity-0'}  group-hover:opacity-100"
			></i>
		</div>
		<Avatar {user} />
	{/if}
</button>
