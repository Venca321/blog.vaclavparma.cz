<script lang="ts">
	import { browser } from '$app/environment';
	let text = '';
	let back = '';

	if (browser) {
		const params = new URLSearchParams(window.location.search);
		text = decodeURIComponent(params.get('text') || '');
		back = decodeURIComponent(params.get('back') || '');
	}

	function redirect() {
		window.history.go(-2);
	}
</script>

<h1>{text}</h1>
<button on:click={redirect}>{back}</button>

<style>
	h1 {
		text-align: center;
		margin-top: 45vh;
	}

	button {
		display: flex;
		margin: auto auto 35vh auto;
		font-size: 18px;
		padding: 5px 25px;
	}
</style>
