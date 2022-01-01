<script>
	import Certs from "./Certifications.svelte"
	import Time from "./Time.svelte";
	import Tween from "./Tween.svelte"
	import Fetchcall from "./fetchcall.svelte";
	  import TodoListItems from "./TodoListItems.svelte";
		import AddTodoForm from "./AddTodoForm.svelte";
	export let name;
	let todos = [
    { id: 1, text: 'Walk the dog', completed: false },
    { id: 2, text: 'Mop the floors', completed: true },
  ];

</script>

<main>
		<Time />
	<Certs />			

	<h1>{name}'s Todo List!</h1>
	<div class="flex">

	<div>	<TodoListItems {todos} /></div>
	<div><AddTodoForm/></div>	
	</div>

	<Tween />
	<Fetchcall />
  </main>

<style>
	.flex{

		display: flex;
		flex-wrap: wrap;
        gap:1em;
        justify-content: space-around;
	}
	.flex > div{
		width: 45%;
	}
	main {
		
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #20021c;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 500;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	
	}

	@media (max-width: 640px) {
		
		.flex{
			display: block;
		}
		.flex > div{
		width: 100%;
	}
	}
</style>