<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import ListsWrapper from '$lib/components/ListsWrapper.svelte';
	import ListWithChecks from '$lib/components/ListWithChecks.svelte';
	import Warning from '$lib/components/Warning.svelte';
	import { usePocketBase } from '$lib/pocketbase.svelte.ts';
	import ResetChecks from '../ResetChecks.svelte';

	interface Props {
		todos: any[];
		alerts: any[];
		user: any;
	}

	let { todos, alerts, user }: Props = $props();

	let pb = usePocketBase();

	const toggleTodoDone = async (todoId: string, newState: boolean) => {
		await pb.collection('todo').update(todoId, {
			done: newState ? user.id : null
		});
		invalidateAll();
	};

	const resetChecks = async () => {
		const batch = pb.createBatch();

		for (const todo of todos) {
			batch.collection('todo').update(todo.id, {
				done: null
			});
		}
	const result = await batch.send();
	invalidateAll();
	};
</script>

{#each alerts as alert}
	<Warning severity={alert.severity} text={alert.text} />
{/each}

{#if todos && todos.length > 0}
	<ListsWrapper title="Checkliste" faIcon="tasks">
		<ListWithChecks
			items={todos.map((todo) => ({
				title: todo.title,
				userDone: todo.expand?.done,
				toggleDone: () => toggleTodoDone(todo.id, !todo.expand?.done)
			}))}
		/>
	</ListsWrapper>
{:else}
	<p>Keine Todos vorhanden</p>
{/if}

<ResetChecks resetChecks={resetChecks} />
