<script lang="ts">
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<Navbar variant="CZ" />

<slot />

<Footer />

<style>
	:global(:root) {
		--primary: #15171a;
		--on-primary: #ffffff;
		--secondary: #3185fc;
		--on-secondary: #323232;
		--tertiary: #070f17;
		--on-tertiary: #ffffff;
		--blog: #15171a;
	}
</style>
