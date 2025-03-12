<script lang="ts">
	import { getColor, getIcon } from './TechMapping.ts';
	import { onMount } from 'svelte';

	export let tech = '';
	export let showColor = false;

	// Check if the screen is mobile
	let isMobile = false;

	onMount(() => {
		const mq = window.matchMedia('(max-width: 800px)');
		isMobile = mq.matches;
		const handleChange = (e: MediaQueryListEvent) => {
			isMobile = e.matches;
		};
		mq.addEventListener('change', handleChange);
		return () => {
			mq.removeEventListener('change', handleChange);
		};
	});
</script>

<main
	class:mobile={isMobile && !showColor}
	style="background-color: {showColor ? getColor(tech) : 'var(--background-primary)'};"
>
	<div style="color: {showColor ? 'white' : 'var(--text-primary)'};">
		{@html getIcon(tech)}
	</div>
	<p style="padding-left: 4px; color: {showColor ? 'white' : 'var(--text-primary)'}">
		{tech.toUpperCase()}
	</p>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 15px 30px;
		font-family: 'JetBrains Mono';
		font-size: var(--font-size-text-body);
		font-weight: 800;
		letter-spacing: 3px;
		color: var(--text-primary);
		margin-left: 20px;
		border-radius: 10px;
	}

	@media only screen and (max-width: 800px) {
		main.mobile {
			padding: 7.5px 15px;
		}
	}
</style>
