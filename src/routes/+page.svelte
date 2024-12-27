<script lang="ts">
	import LottiePlayer from '$lib/components/LottiePlayer.svelte';
	import * as Button from '$lib/components/ui/button/index.ts';
	import * as Card from '$lib/components/ui/card/index.ts';
</script>

<div class="flex flex-col gap-4 mt-10">
	<LottiePlayer src="/hero-animation.json" wrapperClasses="w-60 max-w-full" />
	<h1 class="text-6xl font-bold">Camping Manual</h1>
	<p>Eine Handbuchsammlung</p>
</div>
<div class="mt-8 grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
	<Card.Root class="w-full">
		<Card.Header>
			<i class="fas fa-rocket text-4xl"></i>
		</Card.Header>
		<Card.Content>
			<h2 class="text-2xl font-bold">Missionen</h2>
			<p>Aufgabensammlungen</p>
		</Card.Content>
		<Card.Footer>
			<Button.Root href="/mission" class="bg-blue-700">Zu den Missionen<i class="fas fa-arrow-right"></i></Button.Root>
		</Card.Footer>
	</Card.Root>
	<Card.Root class="w-full">
		<Card.Header>
			<i class="fas fa-list-ol text-4xl"></i>
		</Card.Header>
		<Card.Content>
			<h2 class="text-2xl font-bold">Sequenzen</h2>
			<p>Festgelegte Abläufe für Tätigkeiten</p>
		</Card.Content>
		<Card.Footer>
			<Button.Root href="/sequence" class="bg-green-700">
				Sequenzen durchsuchen<i class="fas fa-arrow-right"></i>
				</Button.Root>
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
			<Button.Root href="/checklist" class="bg-orange-600"
				>Listen durchsuchen<i class="fas fa-arrow-right"></i></Button.Root
			>
		</Card.Footer>
	</Card.Root>
</div>