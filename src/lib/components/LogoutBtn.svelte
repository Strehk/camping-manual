<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { usePocketBase } from '$lib/pocketbase.svelte.ts';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import Avatar from './Avatar.svelte';

	interface Props {
		user: any;
	}

	const pb = usePocketBase();

	let { user }: Props = $props();
</script>

<AlertDialog.Root>
	<div class="fixed right-0 top-0 p-4 sm:p-10">
		<AlertDialog.Trigger>
			<Avatar {user} />
		</AlertDialog.Trigger>
	</div>

	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Abmelden</AlertDialog.Title>
			<AlertDialog.Description>Willst du dich wirklich abmelden?</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Zurück</AlertDialog.Cancel>
			<form
				method="POST"
				action="/logout"
				use:enhance={() => {
					return async ({ result }) => {
						pb.authStore.clear();
						await applyAction(result);
					};
				}}
			>
				<button>
					<AlertDialog.Action>Ja, abmelden!</AlertDialog.Action>
				</button>
			</form>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
