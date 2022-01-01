import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Joseph',
		age: 40,
		occupation:'Developer'

	}
});

export default app;