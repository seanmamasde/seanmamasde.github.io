<main class="section" id="about">
	<span id="dot"></span>

	<div id="title-block">
		<p data-animate id="title-name">About Me</p>
		<p data-animate id="title-sub">Who I am, and what I do.</p>
	</div>

	<ul id="about-list">
		<li data-emoji="🎓" data-animate>
			I am a Computer Science major at National Yang Ming Chiao Tung University, Hsinchu, Taiwan.
		</li>
		<li data-emoji="🌐" data-animate>
			I can speak fluent English and Mandarin; currently learning Japanese.
		</li>
		<li data-emoji="🖥️" data-animate>
			I enjoy everything technology, computers and scientific research.
		</li>
		<li data-emoji="🌱" data-animate>
			I maintain a few open source projects, including my experimental software and dotfiles.
		</li>
		<li data-emoji="🖼️" data-animate>
			I am enthusiastic about graphic design, and video/photo editing. I also enjoy photography
			using my phone.
			<!-- See my Photos. -->
		</li>
		<li data-emoji="🔍" data-animate>
			I am interested in machine learning, and data science. I also have a fair amount of experience
			working with various cloud platforms.
		</li>
		<li data-emoji="🦉" data-animate>
			For more info, please check out my
			<a href="#projects">[Projects]</a> and <a href="#skills">[Skills & Interests]</a>.
		</li>
	</ul>
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
		margin-bottom: 100px;
	}

	#title-name {
		font-size: clamp(2rem, 10vw, var(--font-size-title));
		margin-top: -20px;
		margin-left: -3px;
	}

	#title-sub {
		font-size: var(--font-size-text-body);
		color: var(--text-secondary);
		margin-bottom: -20px;
	}

	#about-list {
		max-width: 75%;
		margin-left: 64px;
		margin-bottom: 100px;
		list-style: none;
	}

	#about-list li {
		position: relative;
		padding-left: 2.5em; /* Space for the emoji bullet */
		margin-bottom: 20px;
		font-size: var(--font-size-text-subheading);
		color: var(--text-primary);
	}

	#about-list li::before {
		content: attr(data-emoji); /* Insert emoji from the data attribute */
		position: absolute;
		left: 0;
		top: 0;
		width: 2em; /* Ensures enough space for the emoji */
		text-align: center;
	}

	#about-list a {
		color: var(--text-primary);
		text-decoration: none;
	}

	#about-list a:hover {
		color: var(--text-secondary);
	}

	@media only screen and (max-width: 800px) {
		main {
			width: 100vw;
			border: none;
		}

		#title-block {
			margin-left: 10px;
			margin-bottom: 25px;
			padding: 20px;
		}

		#about-list {
			margin-left: 25px;
			align-items: center;
			justify-content: center;
			max-width: 90%;
		}

		#dot {
			display: none;
		}
	}
</style>
