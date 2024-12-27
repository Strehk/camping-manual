<script lang="ts">
	import CardGrid from '$lib/components/CardGrid.svelte';
	import Header from '$lib/components/Header.svelte';
	import List from '$lib/components/List.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<Header title="Sequenzen" faIcon="fa-list-ol" breadcrumbs={[{ faIcon: 'list-ol' }]} />

{#if data.sequences.items && data.sequences.items.length > 0}
	{@const items = data.sequences.items}
	<CardGrid
		items={items.map((sequence) => ({
			title: sequence.title,
			description: sequence.info,
			faIcon: sequence.faIcon,
			href: `/sequence/${sequence.id}`
		}))}
	/>
{:else}
	<p>Keine Missionen gefunden</p>
{/if}
