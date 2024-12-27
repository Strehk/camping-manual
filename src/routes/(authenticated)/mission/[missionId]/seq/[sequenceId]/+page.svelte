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
		{ href: '/mission', faIcon: 'rocket' },
		{ title: data.mission.title, faIcon: data.mission.faIcon, href: '..' },
		{ title: data.sequence.title, faIcon: data.sequence.faIcon }
	]}
	description={data.sequence.info}
/>

<Sequence sequence={data.sequence} steps={data.steps} />

<div class="h-32"></div>
