<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import type { PageData } from './$types';
	import Sequence from '$lib/components/sequence/Sequence.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<Header
	title={data.sequence.title}
	faIcon={data.sequence.faIcon}
	breadcrumbs={[
		{ href: '/sequence', faIcon: 'list-ol' },
		{ title: data.sequence.title, faIcon: data.sequence.faIcon }
	]}
	description={data.sequence.info}
	iconClass="bg-sequence"
/>

<Sequence sequence={data.sequence} steps={data.steps} />

<div class="h-32"></div>
