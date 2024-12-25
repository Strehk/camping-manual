<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex h-screen w-full flex-col gap-4 p-10 justify-start items-start">
	{@render children()}
</div>
