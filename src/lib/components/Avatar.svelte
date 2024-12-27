<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.ts';
	import { usePocketBase } from '$lib/pocketbase.svelte.ts';
	interface Props {
		user: any;
	}

	let { user }: Props = $props();

	let pb = usePocketBase();
</script>

<Avatar.Root>
	{#await pb.files.getURL(user, user.avatar, { thumb: '100x100' }) then data}
		<Avatar.Image src={data} alt="@shadcn" />
	{/await}
	<Avatar.Fallback>
		{user.username.slice(0, 1).toUpperCase()}
	</Avatar.Fallback>
</Avatar.Root>
