<script lang="ts">
	import personal_icon_black from '$lib/assets/personal_icon_black.svg';
	import personal_icon_white from '$lib/assets/personal_icon_white.svg';
	import { theme } from '$lib/tools/themeStore.ts';
</script>

<main>
	<span id="dot"></span>

	<div id="content">
		<img src={$theme === 'dark' ? personal_icon_white : personal_icon_black} alt="personal_icon" />
		<div id="text">
			<p>
				You can find the source code
				<a
					href="https://github.com/seanmamasde/seanmamasde.github.io"
					target="_blank"
					rel="noopener noreferrer"
				>
					[on my GitHub]
				</a>
				,
			</p>
			<p>
				Licensed under the
				<a
					href="https://www.gnu.org/licenses/gpl-3.0.en.html"
					target="_blank"
					rel="noopener noreferrer"
				>
					[GPLv3 Free Software License]
				</a>
				.
			</p>
		</div>
	</div>
</main>

<style>
	main {
		width: 80vw;
		height: 600px;
		display: flex;
		align-items: center;
		border-left: 3px solid;
		border-image: linear-gradient(to bottom, var(--accent-primary) 60%, transparent 40%) 1;
	}

	#dot {
		position: relative;
		left: -19.5px;
		top: 65px;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-color: var(--accent-primary);
	}

	#content {
		display: flex;
		align-items: center;
		margin-left: 25px;
		margin-top: 125px;
	}

	img {
		width: 72px;
		height: 72px;
		margin-right: 10px;
	}

	p {
		color: var(--text-secondary);
		margin-top: 3px;
		margin-left: 10px;
	}

	p,
	a {
		font-size: var(--font-size-text-body);
		color: var(--text-secondary);
		text-decoration: none;
	}

	a:hover {
		color: var(--text-primary);
	}

	@media only screen and (max-width: 800px) {
		main {
			width: 100vw;
			border: none;
		}

		#dot {
			display: none;
		}
	}
</style>
