<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<Header
	title={data.missionId}
	faIcon="fa-rocket"
	breadcrumbs={[{ href: '/mission', faIcon: "rocket" }, { title: data.missionId }]}
	description="Hier könnte ihre Beschreibung stehen"
/>
