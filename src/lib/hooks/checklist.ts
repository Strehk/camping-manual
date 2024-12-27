import { usePocketBase } from '$lib/pocketbase.svelte.ts';

export const useChecklist = async (pb: any, checklistId: string) => {
	const checklist = await pb
		.collection('checklist')
		.getOne(checklistId, { expand: 'todos,alerts,todos.done' });

	return {
		checklist
	};
};
