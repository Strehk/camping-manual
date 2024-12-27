<script lang="ts">
	import Checklist from '$lib/components/checklist/Checklist.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<Header
	title={data.checklist.title}
	faIcon={data.checklist.faIcon}
	breadcrumbs={[
		{ href: '/checklist', faIcon: 'tasks' },
		{ title: data.checklist.title, faIcon: data.checklist.faIcon }
	]}
	description={data.checklist.info}
	iconClass="bg-checklist"
/>

<Checklist
	todos={data.checklist.expand?.todos}
	alerts={data.checklist.expand?.alerts}
	user={data.user}
/>

<div class="h-32"></div>
