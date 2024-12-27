<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.ts';
	import {
		getWarningBgColor,
		getWarningIcon,
		getWarningTextColor,
		type Severity
	} from '$lib/utils';
	interface Props {
		severity: Severity;
		text: string;
	}

	let { severity, text }: Props = $props();
</script>

<Card.Root class="{getWarningBgColor(severity)} w-full">
	<Card.Content>
		<div class="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
			<div class="flex h-12 w-12 items-center justify-center">
				<i class="fas fa-{getWarningIcon(severity)} text-3xl {getWarningTextColor(severity)}"></i>
			</div>
			<div class="flex-1 prose">{@html text}</div>
		</div>
	</Card.Content>
</Card.Root>
