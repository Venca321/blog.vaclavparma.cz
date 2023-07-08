<script lang="ts">
	import '../app.css';
</script>

<slot />

<style>
	:global(:root) {
		--primary: #323232;
		--on-primary: #f5f5f5;
		--secondary: #ffb800;
		--on-secondary: #323232;
		--tertiary: #202020;
		--on-tertiary: #e8e8e8;
	}
</style>
