type techType = {
	color: string;
	icon: string;
};

export const techData: { [key: string]: techType } = {
	// programming languages
	'c++': { color: '#e1587e', icon: '<i class="devicon-cplusplus-plain"></i>' },
	'c#': { color: '#e1587e', icon: '<i class="devicon-csharp-plain"></i>' },
	javascript: { color: '#ecdc68', icon: '<i class="devicon-javascript-plain"></i>' },
	lua: { color: '#00007b', icon: '<i class="devicon-lua-plain"></i>' },
	python: { color: '#4571a1', icon: '<i class="devicon-python-plain"></i>' },
	svelte: { color: '#eb5027', icon: '<i class="devicon-svelte-plain"></i>' },
	typescript: { color: '#3478c6', icon: '<i class="devicon-typescript-plain"></i>' },
	bash: { color: '#4e9a06', icon: '<i class="devicon-bash-plain"></i>' },
	powershell: { color: '#4e9a06', icon: '<i class="devicon-powershell-plain"></i>' },
	html: { color: '#e1587e', icon: '<i class="devicon-html5-plain"></i>' },
	css: { color: '#e1587e', icon: '<i class="devicon-css3-plain"></i>' },
	nodejs: { color: '#8cc84b', icon: '<i class="devicon-nodejs-plain"></i>' },
	express: { color: '#8cc84b', icon: '<i class="devicon-express-original"></i>' },
	solidity: { color: '#e1587e', icon: '<i class="devicon-solidity-plain"></i>' },

	// frameworks
	react: { color: '#67aac3', icon: '<i class="devicon-react-original"></i>' },
	tauri: { color: '#d5a789', icon: '<i class="devicon-tauri-plain"></i>' },
	pytorch: { color: '#e1587e', icon: '<i class="devicon-pytorch-plain"></i>' },
	pandas: { color: '#e1587e', icon: '<i class="devicon-pandas-plain"></i>' },
	numpy: { color: '#e1587e', icon: '<i class="devicon-numpy-plain"></i>' },
	'scikit-learn': { color: '#e1587e', icon: '<i class="devicon-scikitlearn-plain"></i>' },
	matplotlib: { color: '#e1587e', icon: '<i class="devicon-matplotlib-plain"></i>' },
	hardhat: { color: '#e1587e', icon: '<i class="devicon-hardhat-plain"></i>' },

	// tools
	neovim: { color: '', icon: '<i class="devicon-neovim-plain"></i>' },
	vscode: { color: '', icon: '<i class="devicon-vscode-plain"></i>' },
	git: { color: '', icon: '<i class="devicon-git-plain"></i>' },
	docker: { color: '', icon: '<i class="devicon-docker-plain"></i>' },
	wsl: { color: '', icon: '<i class="devicon-linux-plain"></i>' },
	ssh: { color: '', icon: '<i class="devicon-ssh-plain"></i>' },
	figma: { color: '', icon: '<i class="devicon-figma-plain"></i>' },
	illustrator: { color: '', icon: '<i class="devicon-illustrator-plain"></i>' },
	photoshop: { color: '', icon: '<i class="devicon-photoshop-plain"></i>' },
	'premiere pro': { color: '', icon: '<i class="devicon-premierepro-plain"></i>' },
	'after effects': { color: '', icon: '<i class="devicon-aftereffects-plain"></i>' },
	blender: { color: '', icon: '<i class="devicon-blender-original"></i>' },
	unity: { color: '', icon: '<i class="devicon-unity-plain"></i>' },
	'unreal engine': { color: '', icon: '<i class="devicon-unrealengine-plain"></i>' },
	anaconda: { color: '', icon: '<i class="devicon-anaconda-original"></i>' },

	// databases
	mysql: { color: '', icon: '<i class="devicon-mysql-plain"></i>' },
	mongodb: { color: '', icon: '<i class="devicon-mongodb-plain"></i>' },
	firebase: { color: '', icon: '<i class="devicon-firebase-plain"></i>' },

	// operating systems
	fedora: { color: '', icon: '<i class="devicon-fedora-plain"></i>' },
	debian: { color: '', icon: '<i class="devicon-debian-plain"></i>' },
	vmware: { color: '', icon: '<i class="devicon-vsphere-plain"></i>' },

	// cloud
	gcp: { color: '', icon: '<i class="devicon-googlecloud-plain"></i>' },
	azure: { color: '', icon: '<i class="devicon-azure-plain"></i>' },
	github: { color: '', icon: '<i class="devicon-github-original"></i>' },
	kaggle: { color: '', icon: '<i class="devicon-kaggle-original"></i>' },
	huggingface: {
		color: '',
		icon: '<img src="https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg" alt="huggingface logo" style="width:24px; height:24px; filter:brightness(0) saturate(100%) invert()"/>'
	},

	// default
	default: { color: '#999999', icon: '<i class="devicon-default-plain"></i>' }
};

export function getColor(tech: string): string {
	return tech.toLowerCase() in techData
		? techData[tech.toLowerCase()].color
		: techData.default.color;
}

export function getIcon(tech: string): string {
	return tech.toLowerCase() in techData ? techData[tech.toLowerCase()].icon : techData.default.icon;
}
