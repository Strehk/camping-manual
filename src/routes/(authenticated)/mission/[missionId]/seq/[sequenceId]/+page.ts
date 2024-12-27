import { useSequence } from '$lib/hooks/sequence';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const sequenceId = params.sequenceId;

	const { sequence, steps } = await useSequence(sequenceId);

	return {
		sequence,
		steps
	};
};
