<script>
	import Filters from "$lib/components/Filters/Filters.svelte";
	import Header from "./Header.svelte";
	import "./styles.scss";
</script>

<div class="app">
	<Header />

	<main>
		<Filters />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0 80px;
		width: 100%;
		box-sizing: border-box;
	}
</style>
