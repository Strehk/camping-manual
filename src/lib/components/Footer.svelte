<script>
	import { configPublic } from '../../config/public';
</script>

<div class="mt-20 flex w-full flex-col gap-2 border-t border-zinc-300 py-4">
	<div class="flex gap-4 text-sm">
		<a href="/" class="hover:underline">Home</a>
		<a href="/imprint" class="hover:underline">Impressum</a>
		<a href="/privacy" class="hover:underline">Datenschutz</a>
	</div>
	<div class="mt-4 text-sm text-zinc-700">
		Copyright © 2024–{new Date().getFullYear()}
		<a href="https://github.com/strehk" class="hover:underline">Tade Strehk</a>
	</div>
	<div class="text-sm text-zinc-700">
		Made with <i class="fas fa-heart text-red-500"></i> in Germany
	</div>
	<div class="mt-4 text-sm text-zinc-700">
		<i class="fas fa-code-compare"></i> Version: {configPublic.PUBLIC_VERSION ?? 'dev'}
	</div>
	<div class="text-sm text-zinc-700">
		<i class="fas fa-gear-code"></i> Branch: {configPublic.PUBLIC_SHA ?? 'n/a'}
	</div>
</div>
