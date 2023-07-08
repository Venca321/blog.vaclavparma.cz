<script lang="ts">
	export let show_lang: string;
	export let href: string;
	export let now_href: string;
</script>

<div id="navbar">
	<div id="container">
		<a href="https://vaclavparma.cz/{now_href}"><img src="../images/logo.png" alt="Domů" /></a>
		<div id="menu">
			<a href="https://vaclavparma.cz/{now_href}#about">O mně</a>
			<a href="https://vaclavparma.cz/{now_href}#kontakt">Kontakt</a>
			<a href="/{now_href}">Blog</a>
		</div>
		<a href="/{href}">{show_lang}</a>
	</div>
</div>

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
</style>
