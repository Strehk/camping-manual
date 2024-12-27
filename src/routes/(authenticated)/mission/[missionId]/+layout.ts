import { usePocketBase } from '$lib/pocketbase';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params }) => {
	const missionId = params.missionId;

	const pb = usePocketBase();

	const mission = await pb.collection('mission').getOne(missionId, { expand: 'alerts' });

	const sequences_raw = await pb
		.collection('mission_sequence')
		.getList(0, 100, { filter: `mission.id='${missionId}'`, expand: 'sequence' });

	const orderedSequences = sequences_raw.items
		.filter((x) => x.stepCount > 0)
		.sort((a, b) => a.stepCount - b.stepCount)
		.map((x) => x.expand?.sequence);

	const unorderedSequences = sequences_raw.items
		.filter((x) => x.stepCount === 0)
		.map((x) => x.expand?.sequence);

	const checklists_raw = await pb
		.collection('mission_checklist')
		.getList(0, 100, { filter: `mission.id='${missionId}'`, expand: 'checklist' });

	const checklists = checklists_raw.items.map((x) => x.expand?.checklist);

	return {
		mission,
		orderedSequences,
		unorderedSequences,
		checklists
	};
};
