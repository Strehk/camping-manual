import { usePocketBase } from '$lib/pocketbase.svelte.ts';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, locals }) => {
	const missionId = params.missionId;

	const mission = await locals.pb.collection('mission').getOne(missionId, { expand: 'alerts' });

	const sequences_raw = await locals.pb
		.collection('mission_sequence')
		.getFullList({ filter: `mission.id='${missionId}'`, expand: 'sequence,done' });

	const orderedSequences = sequences_raw
		.filter((x) => x.stepCount > 0)
		.sort((a, b) => a.stepCount - b.stepCount)
		.map((x) => ({ done: x.expand?.done, ...x.expand?.sequence, missionRelation: x.id }));

	const unorderedSequences = sequences_raw
		.filter((x) => x.stepCount === 0)
		.map((x) => ({ done: x.expand?.done, ...x.expand?.sequence, missionRelation: x.id }));

	const checklists_raw = await locals.pb
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
