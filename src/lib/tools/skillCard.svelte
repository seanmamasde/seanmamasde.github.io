<script lang="ts">
	export let lvl = 0;
</script>

<main data-animate>
	<div id="content">
		<h1><slot name="title" /></h1>
		<div id="progress-bar-bg">
			<div id="progress-bar-fg" style="width: {lvl}%;"></div>
			<div id="progress-bar-labels">
				<p style="text-align: left;">BEGINNER</p>
				<p style="text-align: center;">INTERMEDIATE</p>
				<p style="text-align: right;">ADVANCED</p>
			</div>
		</div>
		<div id="labels"><slot name="labels" /></div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		width: 90%;
		margin-right: 30px;
		margin-top: 30px;
		background-color: var(--background-secondary);
		padding: 20px;
		transform: skew(-5deg);
		overflow: hidden;
		border-radius: 10px;
		border: 2px solid var(--background-secondary);
	}

	#content {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: -10px;
		transition: 250ms;
	}

	h1 {
		margin-bottom: 5px;
	}

	#progress-bar-bg {
		width: 100%;
		height: 20px;
		margin-top: 15px;
		margin-bottom: 5px;
		border-radius: 5px;
		background-color: var(--background-primary);
	}

	#progress-bar-fg {
		height: 100%;
		background-color: var(--accent-secondary);
		box-shadow: 0 0 10px var(--accent-secondary);
		border-radius: 5px;
	}

	#progress-bar-labels {
		position: relative;
		top: -17px;
		display: flex;
	}

	#progress-bar-labels p {
		color: var(--text-primary);
		font-size: var(--font-size-text-small);
		flex: 1;
		margin: 0 5px;
	}

	#labels {
		display: flex;
		margin-top: 20px;
		margin-bottom: -10px;
	}

	@media only screen and (max-width: 800px) {
		main {
			transform: none;
			padding: 10px;
			margin-right: 10px;
			margin-left: -15px;
		}

		#content {
			margin-left: 0;
			margin-bottom: 0;
		}

		h1 {
			font-size: var(--font-size-text-subheading);
		}

		p {
			font-size: var(--font-size-text-small);
		}
	}
</style>
