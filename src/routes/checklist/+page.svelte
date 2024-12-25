<script>
	import Header from '$lib/components/Header.svelte';
	import List from '$lib/components/List.svelte';
</script>

<Header title="Checklisten" faIcon="fa-list-check" breadcrumbs={[{ faIcon: 'fa-list-check' }]} />

<List
	items={[
		{
			title: 'Checkliste 1',
			description: 'Beschreibung der Checkliste 1',
			href: '/checklist/1',
			faIcon: 'fa-list-check'
		},
		{
			title: 'Checkliste 2',
			description: 'Beschreibung der Checkliste 2',
			href: '/checklist/2',
			faIcon: 'fa-list-check'
		},
		{
			title: 'Checkliste 3',
			description: 'Beschreibung der Checkliste 3',
			href: '/checklist/3',
			faIcon: 'fa-list-check'
		}
	]}
/>
