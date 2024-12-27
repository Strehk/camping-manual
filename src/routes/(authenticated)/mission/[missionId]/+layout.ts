import { usePocketBase } from '$lib/pocketbase';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params }) => {
	const missionId = params.missionId;

	const pb = usePocketBase();

	const mission = await pb.collection('mission').getOne(missionId, { expand: 'alerts' });

	const sequences_raw = await pb
		.collection('mission_sequence')
		.getFullList({ filter: `mission.id='${missionId}'`, expand: 'sequence,done' });

	const orderedSequences = sequences_raw
		.filter((x) => x.stepCount > 0)
		.sort((a, b) => a.stepCount - b.stepCount)
		.map((x) => ({ done: x.expand?.done, ...x.expand?.sequence, missionRelation: x.id }));

	const unorderedSequences = sequences_raw
		.filter((x) => x.stepCount === 0)
		.map((x) => ({ done: x.expand?.done, ...x.expand?.sequence, missionRelation: x.id }));

	const checklists_raw = await pb
		.collection('mission_checklist')
		.getFullList({ filter: `mission.id='${missionId}'`, expand: 'checklist,done' });

	const checklists = checklists_raw.map((x) => ({
		done: x.expand?.done,
		...x.expand?.checklist,
		missionRelation: x.id
	}));

	return {
		mission,
		orderedSequences,
		unorderedSequences,
		checklists
	};
};
