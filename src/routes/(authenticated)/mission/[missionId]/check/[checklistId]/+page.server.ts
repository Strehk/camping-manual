import { useChecklist } from '$lib/hooks/checklist';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	const checklistId = params.checklistId;

	const { checklist } = await useChecklist(locals.pb, checklistId);

	return {
		checklist
	};
};
