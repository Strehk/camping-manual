import { usePocketBase } from '$lib/pocketbase';

export const useSequence = async (sequenceId: string) => {
	const pb = usePocketBase();

	const sequence = await pb
		.collection('sequence')
		.getOne(sequenceId, { expand: 'alerts,steps,steps.alerts' });

	const steps = (sequence.expand?.steps ?? []).sort((a, b) => a.stepNumber - b.stepNumber);

	return {
		sequence,
		steps
	};
};
