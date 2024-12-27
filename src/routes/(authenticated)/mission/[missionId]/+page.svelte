<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import ListsWrapper from '$lib/components/ListsWrapper.svelte';
	import ListWithChecks from '$lib/components/ListWithChecks.svelte';
	import Warning from '$lib/components/Warning.svelte';
	import { usePocketBase } from '$lib/pocketbase';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let pb = usePocketBase();

	const toggleSequenceDone = async (sequenceId: string, newState: boolean) => {
		await pb.collection('sequence').update(sequenceId, {
			done: newState
		});
		invalidateAll();
	};

	const toggleChecklistDone = async (checklistId: string, newState: boolean) => {
		await pb.collection('checklist').update(checklistId, {
			done: newState
		});
		invalidateAll();
	};
</script>

<Header
	title={data.mission.title}
	faIcon={data.mission.faIcon}
	breadcrumbs={[
		{ href: '/mission', faIcon: 'rocket' },
		{ title: data.mission.title, faIcon: data.mission.faIcon }
	]}
	description={data.mission.description}
/>

{#each data.mission.expand?.alerts as alert}
	<Warning severity={alert.severity} text={alert.text} />
{/each}

{#if data.orderedSequences && data.orderedSequences.length > 0}
	<ListsWrapper title="Geordnete Sequenzen" faIcon="fa-list-ol">
		<ListWithChecks
			ordered
			items={data.orderedSequences.map((sequence) => ({
				title: sequence.title,
				description: sequence.info,
				href: `./${data.mission.id}/seq/${sequence.id}`,
				done: sequence.done,
				toggleDone: () => toggleSequenceDone(sequence.id, !sequence.done)
			}))}
		/>
	</ListsWrapper>
{/if}

{#if data.unorderedSequences && data.unorderedSequences.length > 0}
	<ListsWrapper title="Andere Sequenzen" faIcon="fa-list">
		<ListWithChecks
			items={data.unorderedSequences.map((sequence) => ({
				title: sequence.title,
				description: sequence.info,
				href: `./${data.mission.id}/seq/${sequence.id}`,
				done: sequence.done,
				toggleDone: () => toggleSequenceDone(sequence.id, !sequence.done)
			}))}
		/>
	</ListsWrapper>
{/if}

{#if data.checklists && data.checklists.length > 0}
	<ListsWrapper title="Checklisten" faIcon="fa-tasks">
		<ListWithChecks
			items={data.checklists.map((checklist) => ({
				title: checklist.title,
				description: checklist.info,
				href: `./${data.mission.id}/check/${checklist.id}`,
				done: checklist.done,
				toggleDone: () => toggleChecklistDone(checklist.id, !checklist.done)
			}))}
		/>
	</ListsWrapper>
{/if}

<div class="h-32"></div>
