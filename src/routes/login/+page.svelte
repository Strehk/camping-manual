<script lang="ts">
	import { goto } from '$app/navigation';
	import { enhance, applyAction } from '$app/forms';
	import { Button } from '$lib/components/ui/button/index.ts';
	import { Input } from '$lib/components/ui/input/index.ts';
	import { Label } from '$lib/components/ui/label/index.ts';
	import { superForm } from 'sveltekit-superforms';
	import { usePocketBase } from '$lib/pocketbase.svelte.ts';
	import BackButton from '$lib/components/BackButton.svelte';

	let { data } = $props();

	const { form, message } = superForm(data.form);

	const pb = usePocketBase();

	$effect(() => {
		if ($message === 'Login erfolgreich') {
			setTimeout(() => {
				goto('/');
			}, 1000);
		}
	});
</script>

<BackButton />

<h1 class="text-4xl font-bold">Login</h1>

<form
	method="POST"
	use:enhance={() => {
		return async ({ result }) => {
			pb.authStore.loadFromCookie(document.cookie);
			await applyAction(result);
		};
	}}
	class="flex w-full max-w-sm flex-col gap-4"
>
	<div class="flex w-full max-w-sm flex-col gap-1.5">
		<Label for="email">Email</Label>
		<Input id="email" type="email" name="email" bind:value={$form.email} />
	</div>
	<div class="flex w-full max-w-sm flex-col gap-1.5">
		<Label for="password">Passwort</Label>
		<Input id="password" type="password" name="password" bind:value={$form.password} />
	</div>
	{#if $message}
		<div class="message">{$message}</div>
	{/if}

	<Button type="submit">Login</Button>
</form>