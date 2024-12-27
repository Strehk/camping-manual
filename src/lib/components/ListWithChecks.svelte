<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.ts';
	import PersonalCheckBox from './PersonalCheckBox.svelte';

	interface Props {
		items: {
			title: string;
			description?: string;
			href?: string;
			userDone: any;
			toggleDone: () => void;
		}[];
		ordered?: boolean;
	}

	let { items, ordered }: Props = $props();
</script>

<div class="flex w-full flex-col gap-2">
	{#each items as item, i}
		<Card.Root>
			<Card.Content class="flex items-center gap-6">
				<div class="flex items-center justify-center">
					<PersonalCheckBox toggleDone={item.toggleDone} user={item.userDone} />
				</div>
				<a class="flex w-full flex-1 flex-col gap-2 {item.userDone && 'opacity-30'}" href={item.href}>
					<h2 class="text-xl font-bold sm:text-2xl">
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
