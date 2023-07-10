<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { onDestroy } from 'svelte';

	export let data;

	let searchData = data.posts.map((post: any) => ({
		...post,
		searchTerms: `${post.title} ${post.excerpt} ${post.tags.map((tag: any) => tag.name).join(' $tag:')}}`
	}));

	const searchStore = createSearchStore(searchData);
	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<svelte:head>
	<meta name="description" content="Václav Parma blog - Projekty a příběhy každodenního života" />
</svelte:head>

<div id="main">
	<div id="main-text">
		<h1>Václav Parma blog</h1>
		<p>Projekty a příběhy každodenního života</p>
	</div>
</div>

<div id="bar">
	<div id="filters">
		<label><input type="checkbox" bind:group={$searchStore.filters} value={'$tag:info'} />Info</label>
		<label><input type="checkbox" bind:group={$searchStore.filters} value={'$tag:project'} />Projekt</label>
		<label><input type="checkbox" bind:group={$searchStore.filters} value={'$tag:weekly'} />Weekly</label>
		<label><input type="checkbox" bind:group={$searchStore.filters} value={'$tag:other'} />Jiné</label>
	</div>
	<input id="search-bar" type="search" placeholder="Hledat..." bind:value={$searchStore.search} />
</div>

{#each $searchStore.filtered as post}
	<Post
		img={post.feature_image}
		img_alt={post.feature_image_alt}
		title={post.title}
		author={post.authors[0].name}
		updated_at={post.updated_at}
		text={post.excerpt}
		href="/posts/{post.slug}"
	/>
{/each}

<style>
	#main {
		height: 32vh;
		text-align: center;
	}

	#main-text {
		margin-top: 28vh;
	}

	#main-text h1 {
		color: var(--on-primary);
	}

	#main-text p {
		font-size: 20px;
	}

	#bar {
		width: 100%;
		height: fit-content;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid var(--on-primary);
		border-top: 1px solid var(--on-primary);
		margin-bottom: 3%;
	}

	#filters {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	#filters label {
		width: 110px;
		text-align: center;
		background-color: rgb(180, 183, 187);
		color: var(--primary);
		border: none;
		border-radius: 5px;
		padding: 3px 8px;
		margin: 10px 20px 10px 20px;
		user-select: none;
	}

	#filters label:hover {
		cursor: pointer;
	}

	#search-bar {
		width: 30%;
		margin-left: 10vw;
		padding: 5px 5px 5px 5px;
		border-radius: 5px;
		border: 2px solid rgb(180, 183, 187);
		background-color: rgb(180, 183, 187);
	}

	#search-bar:focus {
		outline: none;
		border: var(--secondary) 2px solid;
	}

	@media (max-width: 800px) {
		#main {
			height: 22vh;
		}

		#main-text {
			margin-top: 22vh;
		}

		#bar {
			width: 100%;
		}

		#filters {
			margin-top: 1vh;
		}

		#filters label {
			width: 30%;
		}

		#search-bar {
			width: 90%;
			margin-left: 0;
			margin-top: 1vh;
			margin-bottom: 2vh;
		}
	}
</style>
