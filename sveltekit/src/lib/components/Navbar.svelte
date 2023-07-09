<script lang="ts">
	export let variant: string;
</script>

{#if variant === 'EN'}
	<div id="navbar">
		<div id="container">
			<a href="https://vaclavparma.cz/EN">Home</a>
			<div id="menu">
				<a href="https://vaclavparma.cz/EN#about">About me</a>
				<a href="https://vaclavparma.cz/EN#kontakt">Contact</a>
				<a href="/EN">Blog</a>
			</div>
			<a href="/">EN</a>
		</div>
	</div>
{:else}
	<div id="navbar">
		<div id="container">
			<a href="https://vaclavparma.cz/">Domů</a>
			<div id="menu">
				<a href="https://vaclavparma.cz/#about">O mně</a>
				<a href="https://vaclavparma.cz/#kontakt">Kontakt</a>
				<a href="/">Blog</a>
			</div>
			<a href="/EN">CZ</a>
		</div>
	</div>
{/if}

<style>
	#navbar {
		position: fixed;
		top: 0;
		left: 0;
		height: 8vh;
		width: 100%;
		background-color: var(--tertiary);
		z-index: 999999;
	}

	#navbar a {
		color: var(--on-tertiary);
		text-decoration: none;
		transition: 0.15s;
		font-size: 24px;
		margin-top: 2.25vh;
	}

	#navbar a:hover {
		color: var(--secondary);
		text-decoration: underline;
	}

	#container {
		display: flex;
		justify-content: space-between;
		max-width: 80%;
		margin: auto;
	}

	#menu {
		display: flex;
		justify-content: space-between;
		width: 30%;
	}

	@media (max-width: 800px) {
		#navbar a {
			font-size: 18px;
		}

		#menu {
			width: 60%;
		}
	}
</style>
