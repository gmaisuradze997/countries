<script>
	import { onMount } from "svelte";
	import api from "$lib/api";
	import { writable } from "svelte/store";

	export const countries = writable([]);

	onMount(async () => {
		const data = await api.getAllCountries();
		countries.set(data);
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
