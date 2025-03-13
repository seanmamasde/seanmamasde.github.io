<script lang="ts">
	import ProjectCard from '$lib/tools/projectCard.svelte';

	import projectsJSON from '$lib/data/projects.json';

	let projects = projectsJSON.projects;
</script>

<main class="section" id="projects">
	<span id="dot"></span>

	<div id="title-block">
		<p data-animate id="title-name">Projects</p>
		<p data-animate id="title-sub">Hover over or tap the cards to get more info!</p>
	</div>

	<div id="cards">
		{#each projects as project}
			<ProjectCard img={project.img} scale={project.scale} url={project.url} tech={project.tech}>
				<span slot="title">{project.name}</span>
				<span slot="descr">{project.descr}</span>
			</ProjectCard>
		{/each}
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		width: 80vw;
		border-left: 3px solid var(--accent-primary);
	}

	#dot {
		position: relative;
		left: -19.5px; /* -18px - 1.5px (from border-left) */
		top: 150px;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-color: var(--accent-primary);
	}

	#title-block {
		margin-left: 75px;
		margin-top: 100px;
		margin-bottom: 50px;
	}

	#title-name {
		font-size: clamp(2rem, 10vw, var(--font-size-title));
		margin-top: -20px;
		margin-left: -3px;
	}

	#title-sub {
		font-size: var(--font-size-text-body);
		color: var(--text-secondary);
	}

	#cards {
		display: flex;
		flex-wrap: wrap;
		max-width: 100%;
		margin-left: 75px;
		margin-bottom: 100px;
	}

	@media only screen and (max-width: 800px) {
		main {
			width: 100vw;
			border: none;
		}

		#title-block {
			margin-left: 10px;
			margin-bottom: 0px;
			padding: 20px;
		}

		#cards {
			margin-left: 25px;
			align-items: center;
			justify-content: center;
		}

		#dot {
			display: none;
		}
	}
</style>
