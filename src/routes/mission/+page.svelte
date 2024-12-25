<script>
	import List from '$lib/components/List.svelte';
	import * as Button from '$lib/components/ui/button/index.ts';
</script>

<Button.Root href="/" variant="ghost" class="w-auto">Zurück</Button.Root>
<h1 class="text-4xl font-bold">Missionen</h1>

<List
	items={[
		{
			title: 'Mission 1',
			description: 'Beschreibung der Mission 1',
			href: '/mission/1',
			faIcon: 'fa-rocket'
		},
		{
			title: 'Mission 2',
			description: 'Beschreibung der Mission 2',
			href: '/mission/2',
			faIcon: 'fa-rocket'
		},
		{
			title: 'Mission 3',
			description: 'Beschreibung der Mission 3',
			href: '/mission/3',
			faIcon: 'fa-rocket'
		}
	]}
/>
