import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const initialTheme = browser ? localStorage.getItem('theme') || 'dark' : 'dark';
export const theme = writable(initialTheme);

if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		document.documentElement.setAttribute('data-theme', value);
	});
}
