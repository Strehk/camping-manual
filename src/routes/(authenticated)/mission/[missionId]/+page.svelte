<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import ListsWrapper from '$lib/components/ListsWrapper.svelte';
	import ListWithChecks from '$lib/components/ListWithChecks.svelte';
	import ResetChecks from '$lib/components/ResetChecks.svelte';
	import Warning from '$lib/components/Warning.svelte';
	import { usePocketBase } from '$lib/pocketbase.svelte.ts';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let pb = usePocketBase();

	const toggleSequenceDone = async (sequenceId: string, newState: boolean) => {
		await pb.collection('mission_sequence').update(sequenceId, {
			done: newState ? data?.user?.id : null
		});
		invalidateAll();
	};

	const toggleChecklistDone = async (checklistId: string, newState: boolean) => {
		await pb.collection('mission_checklist').update(checklistId, {
			done: newState ? data?.user?.id : null
		});
		invalidateAll();
	};

	const resetChecks = async () => {
		const batch = pb.createBatch();

		const resetSequence = (sequenceId: string) => {
			batch.collection('mission_sequence').update(sequenceId, {
				done: null
			});
		};

		for (const sequence of data.orderedSequences) {
			resetSequence(sequence.missionRelation);
		}

		for (const sequence of data.unorderedSequences) {
			resetSequence(sequence.missionRelation);
		}

		for (const checklist of data.checklists) {
			batch.collection('mission_checklist').update(checklist.missionRelation, {
				done: null
			});
		}

		const result = await batch.send();
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
	iconClass="bg-mission"
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
				userDone: sequence.done,
				toggleDone: () => toggleSequenceDone(sequence.missionRelation, !sequence.done)
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
				userDone: sequence.done,
				toggleDone: () => toggleSequenceDone(sequence.missionRelation, !sequence.done)
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
				userDone: checklist.done,
				toggleDone: () => toggleChecklistDone(checklist.missionRelation, !checklist.done)
			}))}
		/>
	</ListsWrapper>
{/if}

<ResetChecks {resetChecks} />
