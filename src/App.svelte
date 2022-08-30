<script>
	let title = "光";
  import TaskList from './TaskList.svelte';
</script>

<main>
  <h1>{title}</h1>
  <div class="flexcontainer">
    <img src="images/roodborstje.png" alt="background image" />
    <TaskList />
  </div>
</main>

<style>
  .flexcontainer {
    display: flex;
    align-items: center;
    margin-left: 500px;
  }
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
    background-image: url('./images/hikari.png');
	}

	h1 {
		color: #ed2939;
		text-transform: uppercase;
		font-size: 5em;
		font-weight: 200;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
