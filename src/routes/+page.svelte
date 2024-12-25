<script lang="ts">
	import * as Button from '$lib/components/ui/button/index.ts';
	import * as Card from '$lib/components/ui/card/index.ts';
</script>

<h1 class="text-6xl font-bold">Camping Manual</h1>
<p>This is a camping manual. It is a collection of tips and tricks for camping.</p>
<div class="mt-8 grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
	<Card.Root class="w-full">
		<Card.Header>
			<i class="fas fa-rocket text-4xl"></i>
		</Card.Header>
		<Card.Content>
			<h2 class="text-2xl font-bold">Missionen</h2>
			<p>Aufgabensammlungen in immer wiederkehrenden Anwendungsfällen</p>
		</Card.Content>
		<Card.Footer>
			<Button.Root href="/mission">Zu den Missionen<i class="fas fa-arrow-right"></i></Button.Root>
		</Card.Footer>
	</Card.Root>
	<Card.Root class="w-full">
		<Card.Header>
			<i class="fas fa-list-ol text-4xl"></i>
		</Card.Header>
		<Card.Content>
			<h2 class="text-2xl font-bold">Sequenz</h2>
			<p>Festgelegte Abläufe für Tätigkeiten</p>
		</Card.Content>
		<Card.Footer>
			<Button.Root href="/sequence">Sequenzen durchsuchen<i class="fas fa-arrow-right"></i></Button.Root>
		</Card.Footer>
	</Card.Root>
	<Card.Root class="w-full">
		<Card.Header>
			<i class="fas fa-list-check text-4xl"></i>
		</Card.Header>
		<Card.Content>
			<h2 class="text-2xl font-bold">Checklisten</h2>
			<p>Listen zum Abhaken</p>
		</Card.Content>
		<Card.Footer>
			<Button.Root href="/checklist">Listen durchsuchen<i class="fas fa-arrow-right"></i></Button.Root>
		</Card.Footer>
	</Card.Root>
</div>
