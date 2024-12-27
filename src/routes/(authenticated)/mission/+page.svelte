<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import List from '$lib/components/List.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<Header
	title="Missionen"
	faIcon="fa-rocket"
	breadcrumbs={[{ faIcon: 'rocket' }]}
	iconClass="bg-mission"
/>

{#if data.missions.items && data.missions.items.length > 0}
	{@const items = data.missions.items}
	<List
		items={items.map((mission) => ({
			title: mission.title,
			description: mission.description,
			faIcon: mission.faIcon,
			href: `/mission/${mission.id}`
		}))}
	/>
{:else}
	<p>Keine Missionen gefunden</p>
{/if}
