<script lang="ts">
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<Navbar show_lang="EN" href="EN" now_href="" />

<slot />

<Footer />

<style>
	:global(:root) {
		--primary: #091b2a;
		--on-primary: #fefefe;
		--secondary: #3185fc;
		--on-secondary: #323232;
		--tertiary: #070f17;
		--on-tertiary: #fefefe;
	}
</style>
