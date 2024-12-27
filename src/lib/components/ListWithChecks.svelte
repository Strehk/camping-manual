<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.ts';
	import { Checkbox } from '$lib/components/ui/checkbox/index.ts';
	import * as Card from '$lib/components/ui/card/index.ts';

	interface Props {
		items: {
			title: string;
			description?: string;
			href?: string;
			done: boolean;
			toggleDone: () => void;
		}[];
		ordered?: boolean;
	}

	let { items, ordered }: Props = $props();
</script>

<div class="flex w-full flex-col gap-2">
	{#each items as item, i}
		<Card.Root>
			<Card.Content class="flex gap-6">
				<div class="flex items-center justify-center">
					<Checkbox checked={item.done} onclick={item.toggleDone} onkeydown={item.toggleDone} />
				</div>
				<a class="flex w-full flex-1 flex-col gap-2" href={item.href}>
					<h2 class="text-xl font-bold sm:text-2xl {item.done && 'line-through'}">
						{#if ordered}
							<span>{i + 1}.</span>
						{/if}
						{item.title}
					</h2>
					{#if item.description}
						<div class="line-clamp-2 text-sm text-zinc-600 sm:text-base">
							{@html item.description}
						</div>
					{/if}
				</a>
			</Card.Content>
		</Card.Root>
	{/each}
</div>
