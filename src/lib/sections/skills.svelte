<script lang="ts">
	import SkillCard from '$lib/tools/skillCard.svelte';
	import TechLabel from '$lib/tools/techLabel.svelte';

	import skillsJSON from '$lib/data/skills.json';

	let skills = skillsJSON.skills;
</script>

<main class="section" id="skills">
	<span id="dot"></span>

	<div id="title-block">
		<p id="title-name" data-animate>Skills & Interests</p>
		<p id="title-sub" data-animate>
			Useful skills I have acquired over the years, and the stuff I am interested in.
		</p>
	</div>

	<div id="cards">
		{#each skills as skill}
			<SkillCard lvl={skill.lvl}>
				<span slot="title">{skill.name}</span>
				<span slot="labels" style="display: flex; flex-wrap: wrap;">
					{#each skill.tech as tech}
						<div id="labels">
							<TechLabel bind:tech />
						</div>
					{/each}
				</span>
			</SkillCard>
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
	}

	#labels {
		margin-left: -22px;
		margin-right: 20px;
		margin-bottom: 20px;
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

		#labels {
			margin-right: 10px;
			margin-bottom: 10px;
		}
	}
</style>
