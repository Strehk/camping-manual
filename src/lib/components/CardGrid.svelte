<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.ts';
	import * as Card from '$lib/components/ui/card/index.ts';
	import { Button } from '$lib/components/ui/button/index.ts';

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

<div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
	{#each items as item, i}
		<Card.Root>
			<Card.Content>
				<div class="flex h-full w-full flex-1 flex-col items-start justify-start gap-4">
					<div class="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200">
						<i class="fas fa-{item.faIcon.replace('fa-', '')} text-lg"></i>
					</div>
					<div class="flex h-full flex-1 flex-col gap-2">
						<h2 class="text-2xl font-bold">{item.title}</h2>
						{#if item.description}
							<div class="line-clamp-2 text-zinc-600">{@html item.description}</div>
						{/if}
					</div>
					<Button href={item.href}>Öffnen<i class="fas fa-arrow-right"></i></Button>
				</div>
			</Card.Content>
		</Card.Root>
	{/each}
</div>
