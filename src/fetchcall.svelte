<script>
	import { onMount } from 'svelte';
	let photos = [];

	onMount(
        async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=3`);
		photos = await res.json();
	});
</script>

<h1>Photo album</h1>

<div class="photos">
	{#each photos as photo}
		<figure>
			<img src={photo.thumbnailUrl} alt={photo.title}>
			<figcaption>{photo.title}</figcaption>
		</figure>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>

<style>
	.photos {
		
		display: flex;
        flex-wrap: wrap;
        gap:1em;
        justify-content: space-around;
	}

	figure, img {
		margin: 0;
	}
</style>