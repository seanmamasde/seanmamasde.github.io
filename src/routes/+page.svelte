<script lang="ts">
	import Home from '$lib/sections/home.svelte';
	import About from '$lib/sections/about.svelte';
	import Projects from '$lib/sections/projects.svelte';
	import Skills from '$lib/sections/skills.svelte';
	import Footer from '$lib/sections/footer.svelte';
	import { onMount } from 'svelte';

	// page scrolling
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry, i) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add('animated');
						observer.unobserve(entry.target);
					}, i * 350);
				}
			});
		});

		document.querySelectorAll('[data-animate]').forEach((e) => observer.observe(e));
		scrollTo(0, 0);
	});

	// apply animation
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.intersectionRatio >= 0.3) {
						entry.target.classList.add('animated');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.3 }
		);

		document.querySelectorAll('[data-animate]').forEach((el) => {
			observer.observe(el);
		});
	});
</script>

<main>
	<Home />
	<About />
	<Projects />
	<Skills />
	<Footer />
</main>

<style>
	:global([data-animate]) {
		position: relative;
		top: 150px;
		transition: top 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
		will-change: top;
	}

	:global(.animated) {
		top: 0;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		overflow: hidden;
	}
</style>
