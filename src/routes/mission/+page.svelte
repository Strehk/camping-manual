<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import List from '$lib/components/List.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<Header title="Missionen" faIcon="fa-rocket" breadcrumbs={[{ faIcon: 'rocket' }]} />

{#if data.missions && data.missions.length > 0}
<List
	items={data.missions.map(mission => ({
		title: mission.title,
		description: mission.description,
		faIcon: mission.faIcon,
		href: `/mission/${mission.id}`
	}))}
/>
{:else}
<p>Keine Missionen gefunden</p>
{/if}