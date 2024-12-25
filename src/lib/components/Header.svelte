<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.ts';

	interface Props {
		title: string;
		faIcon: string;
		breadcrumbs?: {
			title?: string;
			faIcon?: string;
			href?: string;
		}[];
		description?: string;
	}

	let { title, description, faIcon, breadcrumbs }: Props = $props();
</script>

{#if breadcrumbs}
	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/"><i class="fas fa-home"></i></Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />

			{#each breadcrumbs as breadcrumb, i}
				<Breadcrumb.Item>
					<Breadcrumb.Link href={breadcrumb.href}>
						{#if breadcrumb.faIcon}
							<i class="fas fa-{breadcrumb.faIcon.replace('fa-', '')}"></i>
						{/if}
						{#if breadcrumb.title}
							{breadcrumb.title}
						{/if}
					</Breadcrumb.Link>
				</Breadcrumb.Item>
				{#if i !== breadcrumbs.length - 1}
					<Breadcrumb.Separator />
				{/if}
			{/each}
		</Breadcrumb.List>
	</Breadcrumb.Root>
{/if}

<div class="mt-4 flex w-full items-start gap-4">
	<div class="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-zinc-50">
		<i class="fas fa-{faIcon.replace('fa-', '')}"></i>
	</div>
	<div class="flex flex-1 flex-col gap-2">
		<h1 class="mt-1 text-4xl font-bold">{title}</h1>
		{#if description}
			<p class="text-lg">{description}</p>
		{/if}
	</div>
</div>
