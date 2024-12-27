<script lang="ts">
	import { usePocketBase } from '$lib/pocketbase.svelte.ts';

	interface Props {
		imageId: string;
		record: any;
		thumb?: string;
	}

	let pb = usePocketBase();

	let { imageId, record, thumb = '100x250' }: Props = $props();
</script>

{#await pb.files.getURL(record, imageId, thumb ? { thumb } : undefined)}
	<p>Loading...</p>
{:then data}
	<a href={data} target="_blank">
		<div class="overflow-hidden rounded-lg shadow-lg">
			<img src={data} alt={imageId} />
		</div>
	</a>
{:catch error}
	<p>Error: {error.message}</p>
{/await}
