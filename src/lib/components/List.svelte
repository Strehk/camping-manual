<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.ts';

	interface Props {
		items: {
			title: string;
			description: string;
			href: string;
			faIcon: string;
		}[];
	}

	let { items }: Props = $props();
</script>

<div class="flex w-full flex-col gap-2">
	{#each items as item, i}
		<a
			class="flex w-full gap-4 rounded-xl p-4 items-center transition-all duration-300 hover:bg-zinc-100"
			href={item.href}
		>
			<div class="flex items-center justify-center">
				<div class="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200">
					<i class="fas fa-{item.faIcon.replace('fa-', '')} text-lg"></i>
				</div>
			</div>
			<div class="flex w-full flex-1 flex-col gap-2">
				<h2 class="text-2xl font-bold">{item.title}</h2>
				{#if item.description}
					<div class="line-clamp-2 text-zinc-600">{@html item.description}</div>
				{/if}
			</div>
			<div class="hidden flex-col items-end justify-center sm:flex">
				<i class="fas fa-arrow-right text-3xl"></i>
			</div>
		</a>

		{#if i < items.length - 1}
			<Separator />
		{/if}
	{/each}
</div>
