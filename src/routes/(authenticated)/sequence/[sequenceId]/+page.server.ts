import { useSequence } from '$lib/hooks/sequence';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	const sequenceId = params.sequenceId;

	const { sequence, steps } = await useSequence(locals.pb, sequenceId);

	return {
		sequence,
		steps
	};
};
