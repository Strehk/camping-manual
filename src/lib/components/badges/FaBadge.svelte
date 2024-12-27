<script lang="ts">
	interface Props {
		faIcon: string;
		className?: string;
	}

	let { faIcon, className = '' }: Props = $props();
</script>

<i class="fas fa-{faIcon.replace('fa-', '')} text-xl {className}"></i>
