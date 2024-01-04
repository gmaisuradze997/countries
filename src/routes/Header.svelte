<script lang="ts">
	import { onMount } from "svelte";
	import Moon from "$lib/icons/Moon.svg";
	let darkMode: boolean;

	onMount(() => {
		darkMode = localStorage.getItem("darkMode") === "true";
		if (darkMode) {
			window.document.body.classList.add("dark-mode");
		} else {
			window.document.body.classList.remove("dark-mode");
		}
	});

	function toggle() {
		window.document.body.classList.toggle("dark-mode");
		darkMode = !darkMode;
		localStorage.setItem("darkMode", darkMode.toString());
	}
</script>

<header>
	<h1 class="heading">Where in the world?</h1>
	<div class="mode-switch" role="button" tabindex="0" on:click={toggle}>
		<img src={Moon} alt="moon" />
		<p>Dark Mode</p>
	</div>
</header>

<style lang="scss">
	:global(body) {
		background-color: #fafafa;
		color: #111517;
		transition: background-color 0.3s;
	}

	:global(body.dark-mode) {
		background-color: #202c36;
		color: #fff;

		header {
			background: #2b3844;
			box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);

			.heading {
				color: #fff;
			}

			.mode-switch {
				p {
					color: #fff;
				}
			}
		}
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		padding: 23px 80px;
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
		.heading {
			color: #111517;
			margin: 0;
			font-family: Nunito Sans;
			font-size: 24px;
			font-style: normal;
			font-weight: 800;
			line-height: normal;
		}
		.mode-switch {
			display: flex;
			align-items: center;
			cursor: pointer;
			img {
				margin-right: 10px;
			}
			p {
				color: #111517;
				margin: 0;
				font-family: Nunito Sans;
				font-size: 16px;
				font-style: normal;
				font-weight: 600;
				line-height: normal;
			}
		}
	}
</style>
