import { usePocketBase } from '$lib/pocketbase.svelte.ts';

export const useSequence = async (pb: any, sequenceId: string) => {
	const sequence = await pb
		.collection('sequence')
		.getOne(sequenceId, { expand: 'alerts,steps,steps.alerts' });

	const steps = (sequence.expand?.steps ?? []).sort((a, b) => a.stepNumber - b.stepNumber);

	return {
		sequence,
		steps
	};
};
