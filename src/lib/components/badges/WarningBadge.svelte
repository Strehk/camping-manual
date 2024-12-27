<script lang="ts">
	import { getWarningIcon, getWarningTextColor, type Severity } from '$lib/utils';
	import FaBadge from './FaBadge.svelte';
	interface Props {
		severity: Severity;
	}

	let { severity }: Props = $props();
</script>

<FaBadge className={getWarningTextColor(severity)} faIcon={getWarningIcon(severity)} />
