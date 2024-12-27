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

<Header title="Checkliste" faIcon="fa-tasks" breadcrumbs={[{ faIcon: 'list-ol' }]} />

{#if data.checklists.items && data.checklists.items.length > 0}
	{@const items = data.checklists.items}
	<CardGrid
		items={items.map((checklist) => ({
			title: checklist.title,
			description: checklist.info,
			faIcon: checklist.faIcon,
			href: `/checklist/${checklist.id}`
		}))}
	/>
{:else}
	<p>Keine Missionen gefunden</p>
{/if}
