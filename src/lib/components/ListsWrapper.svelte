<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		faIcon: string;
		children: Snippet;
	}

	let { title, faIcon, children }: Props = $props();
</script>

<section class="flex w-full flex-col gap-4">
	<div class="rounded-lg bg-zinc-100 p-4">
		<h2 class="text-2xl font-bold">
			<i class="fas fa-{faIcon.replace('fa-', '')} mr-4"></i>{title}
		</h2>
	</div>
	<div class="flex w-full flex-col gap-4 pl-6">
		{@render children()}
	</div>
</section>
