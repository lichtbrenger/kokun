<script>
	let title = "光";
  import TaskList from './TaskList.svelte';
</script>

<main>
  <h1>{title}</h1>
  <TaskList />
  <img src="images/roodborstje.png" alt="background image" />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ed2939;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
