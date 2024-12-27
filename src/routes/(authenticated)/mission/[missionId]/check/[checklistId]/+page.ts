import { useChecklist } from '$lib/hooks/checklist';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const checklistId = params.checklistId;

	const {checklist} = await useChecklist(checklistId);

	return {
		checklist
	};
};
