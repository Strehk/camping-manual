<script>
	import Header from '$lib/components/Header.svelte';
	import List from '$lib/components/List.svelte';
</script>

<Header title="Sequenz" faIcon="fa-list-ol" breadcrumbs={[{ faIcon: 'list-ol' }]} />

<List
	items={[
		{
			title: 'Sequenz 1',
			description: 'Beschreibung der Sequenz 1',
			href: '/sequence/1',
			faIcon: 'fa-list-ol'
		},
		{
			title: 'Sequenz 2',
			description: 'Beschreibung der Sequenz 2',
			href: '/sequence/2',
			faIcon: 'fa-list-ol'
		},
		{
			title: 'Sequenz 3',
			description: 'Beschreibung der Sequenz 3',
			href: '/sequence/3',
			faIcon: 'fa-list-ol'
		}
	]}
/>
