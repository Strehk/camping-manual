<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	interface Props {
		src: string;
		width?: string;
		height?: string;
		wrapperClasses?: string;
	}

	let { src, wrapperClasses = '' }: Props = $props();

	onMount(async () => {
		if (!browser) return;
		if (!window) return;
		const Lottie = await import('@lottielab/lottie-player/web');
		const player = new Lottie.default();
		player.setAttribute('src', src);
		player.setAttribute('style', 'width: 100%; height: 100%;');
		const div = document.getElementById('lottie-player');
		if (!div) return;
		div.appendChild(player);

		player.play();
	});
</script>

<div class="flex items-center justify-center {wrapperClasses}">
	<div id="lottie-player"></div>
</div>
