<script lang="ts">
	import mouse from '$lib/assets/icons/mouse.svg';
	import github from '$lib/assets/icons/github.svg';
	import discord from '$lib/assets/icons/discord.svg';
	import mail from '$lib/assets/icons/mail.svg';
	import zenn from '$lib/assets/icons/zenn.svg';
	import sun from '$lib/assets/icons/sun.svg';
	import moon from '$lib/assets/icons/moon.svg';
	import x from '$lib/assets/icons/x.svg';

	import { onMount } from 'svelte';
	import Typed from 'typed.js';
	import { theme } from '$lib/tools/themeStore.ts';

	// typing effect
	let typedInstance: Typed;

	onMount(() => {
		const options = {
			strings: ['developer', 'writer', 'creator'],
			typeSpeed: 50,
			backSpeed: 75,
			backDelay: 2000,
			loop: true
		};

		typedInstance = new Typed('#title-typed', options);

		return () => {
			typedInstance.destroy();
		};
	});

	// theme toggle
	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	function toggleTheme() {
		theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
	}

	// mouse scroll thing fade away
	let opacity = 1;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function handleScroll() {
		const height = (window.innerHeight / 4) * 3; // 75% of the window height
		const scrollY = window.scrollY;
		// When scrollY reaches 75% of the window height, opacity will be 0
		opacity = Math.max(0, 1 - scrollY / height);
	}
</script>

<main class="section" id="home">
	<span id="dot"></span>

	<div id="title-block">
		<p id="title-hi">Hi, I'm</p>
		<p id="title-name">seanmamasde</p>
		<p id="title-typing">
			You can call me a <span id="title-typed"></span>.
		</p>

		<div style="display: flex; flex-wrap: wrap;">
			<a class="button" href="#projects" style="color: white">PROJECTS</a>
			<a
				class="button"
				style="background-color: var(--accent-zenn);"
				href="https://zenn.dev/seanmamasde"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={zenn} id="zenn-svg" alt="zenn" />
				<span style="color: white">BLOG</span>
			</a>
			<button
				id="dark-light-mode-toggle"
				class="button"
				aria-label="Toggle theme"
				onclick={toggleTheme}
			>
				{#if mounted}
					<img src={$theme === 'dark' ? sun : moon} alt="theme toggle" />
				{/if}
			</button>
		</div>

		<div id="title-socials">
			<a href="https://github.com/seanmamasde" target="_blank" rel="noopener noreferrer">
				<img src={github} alt="github" style:filter={$theme === 'light' ? 'invert(1)' : 'none'} />
			</a>
			<a
				href="https://x.com/seanmamasde"
				target="_blank"
				rel="noopener noreferrer"
				style="margin-left: -4px;"
			>
				<img src={x} alt="x" style:filter={$theme === 'light' ? 'invert(1)' : 'none'} />
			</a>
			<button
				style="background: none; border: none; margin-left: -10px; margin-right: -10px;"
				aria-label="Copy Discord ID"
				onclick={(e) => {
					navigator.clipboard.writeText('seanmamasde#4559');
					const tooltip = document.createElement('div');
					tooltip.innerText = 'COPIED TO CLIPBOARD';
					tooltip.style.position = 'absolute';
					// @ts-ignore
					const targetBox = e.target.getBoundingClientRect();

					tooltip.style.transition = '0.3s';
					tooltip.style.opacity = '0';
					tooltip.style.padding = '10px';
					tooltip.style.color = 'var(--text-primary)';
					tooltip.style.background = 'var(--background-secondary)';
					tooltip.style.transform = 'skew(-12deg)';
					tooltip.style.borderRadius = '5px';
					document.body.appendChild(tooltip);

					tooltip.style.left =
						targetBox.left + targetBox.width / 2 - tooltip.getBoundingClientRect().width / 2 + 'px';
					tooltip.style.top = targetBox.top + targetBox.height * 1.5 + 'px';
					setTimeout(() => {
						tooltip.style.opacity = '1';
					}, 100);
					setTimeout(() => {
						tooltip.style.opacity = '0';
						setTimeout(() => {
							document.body.removeChild(tooltip);
						}, 300);
					}, 3000);
				}}
			>
				<img src={discord} alt="discord" style:filter={$theme === 'light' ? 'invert(1)' : 'none'} />
			</button>
			<a href="mailto:seanmamasde@seanmamasde.me" target="_blank" rel="noopener noreferrer">
				<img src={mail} alt="mail" style:filter={$theme === 'light' ? 'invert(1)' : 'none'} />
			</a>
		</div>
	</div>

	<img
		src={mouse}
		alt="mouse"
		id="scroll-img"
		style:filter={$theme === 'light' ? 'invert(1)' : 'none'}
		style:opacity
	/>
	<div style:opacity>
		<p id="scroll-text">SCROLL FOR MORE</p>
	</div>
</main>

<style>
	main {
		width: 80vw;
		height: 100vh;
		display: flex;
		align-items: center;
		border-left: 3px solid;
		border-image: linear-gradient(to top, var(--accent-primary) 60%, transparent 40%) 1;
	}

	#dark-light-mode-toggle {
		background-color: var(--background-secondary);
	}

	#dark-light-mode-toggle:hover {
		background-color: var(--accent-primary);
	}

	#dot {
		position: relative;
		left: -19.5px; /* -18px - 1.5px (from border-left) */
		top: -10%;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-color: var(--accent-primary);
	}

	#title-block {
		margin-left: 75px;
		margin-bottom: 50px;
	}

	#title-hi {
		font-size: var(--font-size-text-heading);
		font-weight: 800;
		letter-spacing: 1px;
	}

	#title-name {
		margin-top: -10px;
		margin-left: -3px;
		font-size: clamp(2rem, 10vw, var(--font-size-title));
		text-align: left;
		white-space: nowrap;
	}

	#title-typing {
		margin-bottom: 20px;
		font-size: var(--font-size-text-body);
		color: var(--text-secondary);
	}

	#title-typed {
		color: var(--text-primary);
	}

	#scroll-img {
		width: 40px;
		height: 40px;
		position: absolute;
		left: calc(50% - 20px);
		bottom: 52px;
		animation: scroll-img-anim 2s ease-in-out infinite;
	}

	@keyframes scroll-img-anim {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-30px);
		}
		100% {
			transform: translateY(0);
		}
	}

	#scroll-text {
		width: 200px;
		text-align: center;
		position: absolute;
		right: 50%;
		left: 50%;
		transform: translateX(-50%);
		bottom: 50px;
		animation: scroll-text-anim 2s ease-in-out infinite;
	}

	@keyframes scroll-text-anim {
		0% {
			opacity: 0;
		}
		25% {
			opacity: 0;
		}
		50% {
			opacity: 100%;
		}
		75% {
			opacity: 0%;
		}
		100% {
			opacity: 0;
		}
	}

	#title-socials {
		display: flex;
		margin-top: 20px;
	}

	#title-socials img {
		margin-right: 12px;
		transform: scale(0.8);
		opacity: 60%;
		transition: 250ms;
		height: 36px;
		width: 36px;
	}

	#title-socials img:hover {
		opacity: 100%;
	}

	.button {
		margin-right: 20px;
		margin-top: 4px;
		display: flex;
		align-items: center;
	}

	#zenn-svg {
		width: 12px;
		height: 12px;
		margin-right: 6px;
	}

	@media only screen and (max-width: 800px) {
		main {
			width: 100vw;
			border: none;
			justify-content: center;
		}

		#title-block {
			margin-left: 0;
			width: 85%;
		}

		.button {
			width: fit-content;
			text-align: center;
			margin-bottom: 15px;
		}

		#dot,
		#scroll-img,
		#scroll-text {
			display: none;
		}
	}
</style>
