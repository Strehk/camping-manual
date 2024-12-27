import { usePocketBase } from '$lib/pocketbase';

export const useChecklist = async (checklistId: string) => {
	const pb = usePocketBase();

	const checklist = await pb
		.collection('checklist')
		.getOne(checklistId, { expand: 'todos,alerts' });

	return {
		checklist
	};
};
