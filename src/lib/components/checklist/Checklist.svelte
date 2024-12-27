<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import ListsWrapper from '$lib/components/ListsWrapper.svelte';
	import ListWithChecks from '$lib/components/ListWithChecks.svelte';
	import Warning from '$lib/components/Warning.svelte';
	import { usePocketBase } from '$lib/pocketbase';

	interface Props {
		todos: any[];
		alerts: any[];
	}

	let { todos, alerts }: Props = $props();

	let pb = usePocketBase();

	const toggleTodoDone = async (todoId: string, newState: boolean) => {
		await pb.collection('todo').update(todoId, {
			done: newState
		});
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
				done: todo.done,
				toggleDone: () => toggleTodoDone(todo.id, !todo.done)
			}))}
		/>
	</ListsWrapper>
{:else}
	<p>Keine Todos vorhanden</p>
{/if}
