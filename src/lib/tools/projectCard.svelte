<script lang="ts">
	import TechLabel from './techLabel.svelte';

	export let img = '';
	export let scale = '1';
	export let url = '';
	export let tech = '';
	export let showColor = true;
</script>

<main data-animate>
	<button aria-label="Project Card"></button>
	<img src={img} alt="" style="transform: translate(-50%, -50%) scale({scale});" />

	<div id="content">
		<div style="display: flex;">
			<a
				class="button"
				style="transform: none; color: white"
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				VISIT
			</a>

			{#if tech !== ''}
				<TechLabel bind:tech bind:showColor />
			{/if}
		</div>
		<p><slot name="descr" /></p>
		<h1><slot name="title" /></h1>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		width: 410px;
		height: 225px;
		margin-right: 30px;
		margin-top: 30px;
		background-color: var(--background-secondary);
		padding: 20px;
		transform: skew(-5deg);
		border-radius: 10px;
		overflow: hidden;
		border: 3px solid var(--background-secondary);
	}

	main:hover {
		border: 3px solid var(--accent-primary);
	}

	main:hover > img,
	button:focus ~ img {
		opacity: 20%;
		filter: blur(5px);
	}

	main:hover > div,
	button:focus ~ div {
		z-index: 2 !important;
		opacity: 100% !important;
		transform: translateX(0%) !important;
	}

	button {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: none;
		border: none;
		outline: none;
	}

	img {
		position: absolute;
		z-index: 0;
		top: 50%;
		left: 50%;
		transition: 250ms;
	}

	#content {
		z-index: 0;
		display: flex;
		flex-direction: column-reverse;
		opacity: 0%;
		transform: translateX(-20%);
		transition: 250ms;
	}

	h1 {
		margin-bottom: 5px;
	}

	p {
		margin-bottom: 20px;
		font-size: var(--font-size-text-body);
		color: var(--text-secondary);
	}

	@media only screen and (max-width: 800px) {
		main {
			transform: none;
		}

		h1 {
			word-break: break-all;
		}

		p {
			word-wrap: break-word;
		}
	}
</style>
