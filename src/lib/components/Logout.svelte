<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { getUserContext, usePocketBase } from '$lib/pocketbase';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.ts';

	interface Props {
		user: any;
	}

	const pb = usePocketBase();

	let { user }: Props = $props();

	const getImage = async () => {
		await pb.files.getURL(user, user.avatar, { thumb: '100x100' });
	};
</script>

<AlertDialog.Root>
	<div class="fixed right-0 top-0 p-4">
		<AlertDialog.Trigger>
			<Avatar.Root>
				{#await pb.files.getURL(user, user.avatar, { thumb: '100x100' }) then data}
					<Avatar.Image src={data} alt="@shadcn" />
				{/await}
				<Avatar.Fallback>
					{user.username.slice(0, 1).toUpperCase()}
				</Avatar.Fallback>
			</Avatar.Root>
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
