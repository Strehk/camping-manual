<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import ListsWrapper from '$lib/components/ListsWrapper.svelte';
	import ListWithChecks from '$lib/components/ListWithChecks.svelte';
	import PocketbaseImage from '$lib/components/PocketbaseImage.svelte';
	import * as Card from '$lib/components/ui/card/index.ts';
	import * as Carousel from '$lib/components/ui/carousel/index.ts';
	import * as Accordion from '$lib/components/ui/accordion/index.ts';
	import Warning from '$lib/components/Warning.svelte';
	import WarningBadge from '$lib/components/badges/WarningBadge.svelte';
	import { usePocketBase } from '$lib/pocketbase';
	import FaBadge from '$lib/components/badges/FaBadge.svelte';

	interface Props {
		sequence: any;
		steps: any;
	}

	let { sequence, steps }: Props = $props();
</script>

{#each sequence.expand?.alerts as alert}
	<Warning severity={alert.severity} text={alert.text} />
{/each}

{#if steps && steps.length > 0}
	<ListsWrapper title="Schritte" faIcon="list-ol">
		<Accordion.Root type="single" class="w-full">
			{#each steps as step, i}
				<Accordion.Item value={step.id}>
					<Accordion.Trigger>
						<div class="flex items-center gap-4">
							<h2 class="text-2xl font-bold">{step.stepNumber}. {step.title}</h2>
							{#each step.expand?.alerts as alert}
								<WarningBadge severity={alert.severity} />
							{/each}
							{#if step.instruction}
								<FaBadge faIcon="memo" className="text-green-700" />
							{/if}
							{#if step.images && step.images.length > 0}
								<FaBadge faIcon="images" />
							{/if}
						</div>
					</Accordion.Trigger>
					<Accordion.Content>
						{#if (step.expand?.alerts && step.expand.alerts.length > 0) || step.instruction || (step.images && step.images.length > 0)}
							{#each step.expand?.alerts as alert}
								<Warning severity={alert.severity} text={alert.text} />
							{/each}
							{#if step.instruction}
								<div class="prose">
									{@html step.instruction}
								</div>
							{/if}
							{#if step.images && step.images.length > 0}
								<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
									{#each step.images as image}
										<PocketbaseImage imageId={image} record={step} />
									{/each}
								</div>
							{/if}
						{:else}
							<p>Keine Beschreibung vorhanden</p>
						{/if}
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</ListsWrapper>
{:else}
	<p>Keine Schritte vorhanden</p>
{/if}
