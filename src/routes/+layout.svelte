<script lang="ts">
	import '../app.css';
	import '@fontsource/comfortaa/400.css';
	import '@fontsource/comfortaa/700.css';
	
	let { children } = $props();
	import { env } from '$env/dynamic/public';
</script>

<link href="{env.PUBLIC_FA_CDN_PATH}/css/fontawesome.min.css" rel="stylesheet" />
<link href="{env.PUBLIC_FA_CDN_PATH}/css/solid.min.css" rel="stylesheet" />

<div class="flex h-screen w-full flex-col items-start justify-start gap-4 p-10">
	{@render children()}
</div>
