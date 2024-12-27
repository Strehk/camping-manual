<script lang="ts">
	import Button from './ui/button/button.svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';

	interface Props {
		resetChecks: () => void;
	}

	let { resetChecks }: Props = $props();

	let open = $state(false);
	let loading = $state(false);
</script>

<AlertDialog.Root bind:open>
	<AlertDialog.Trigger>
		<Button class="w-full max-w-sm" variant="secondary">
			<i class="fas fa-redo"></i>
			<span>Fortschritt zurücksetzen</span>
		</Button>
	</AlertDialog.Trigger>

	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Fortschritt zurücksetzen</AlertDialog.Title>
			<AlertDialog.Description>
				Wenn du dies bestätigst, wird dein gesamter Fortschritt in dieser Liste zurückgesetzt und du
				kannst von neuem beginnen
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Abbrechen</AlertDialog.Cancel>
			<AlertDialog.Action
				onclick={async () => {
					loading = true;
					await resetChecks();
					loading = false;
					open = false;
				}}
                class="bg-danger"
			>
				<i class="fas {loading ? 'fa-spinner fa-spin' : 'fa-redo'}"></i>
				Ja, zurücksetzen!
			</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
