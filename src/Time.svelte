<script>
	import { onMount } from 'svelte';
    let time = new Date();


	onMount(
        async () => {

        const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div>{time.toLocaleTimeString()}</div>