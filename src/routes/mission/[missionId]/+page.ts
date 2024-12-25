import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const missionId = params.missionId;

	return {
		missionId
	};
};
