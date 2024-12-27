<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button/index.ts';
	import { Input } from '$lib/components/ui/input/index.ts';
	import { Label } from '$lib/components/ui/label/index.ts';
	import { superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';

	let { data } = $props();

	const { form, enhance, message } = superForm(data.form);

	$effect(() => {
		if ($message) {
			// goto('/');
		}
	});
</script>

<h1 class="text-4xl font-bold">Login</h1>

<form method="POST" use:enhance class="flex w-full max-w-sm flex-col gap-4">
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

<SuperDebug data={$form} />
