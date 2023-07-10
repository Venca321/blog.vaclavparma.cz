<script lang="ts">
	import Post from '$lib/components/Post.svelte';

	export let data;

	let posts: any[] = [];
	let filters: any[] = [];
	async function reloadFilters() {
		await new Promise((resolve) => setTimeout(resolve, 10));
		posts.length = 0;
		for (let post in data.posts) {
			for (let tag in data.posts[post].tags) {
				if (data.posts[post].tags[tag].slug !== 'en' && data.posts[post].tags[tag].slug !== 'cs') {
					if (filters.includes(data.posts[post].tags[tag].slug) || filters.length == 0) {
						posts.push(data.posts[post]);
					}
				}
			}
		}
	}

	reloadFilters();
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

<div id="filters">
	<label
		><input type="checkbox" on:change={reloadFilters} bind:group={filters} value={'info'} /> Info</label
	>
	<label
		><input type="checkbox" on:change={reloadFilters} bind:group={filters} value={'project'} /> Projekt</label
	>
	<label
		><input type="checkbox" on:change={reloadFilters} bind:group={filters} value={'weekly'} /> Weekly</label
	>
</div>

{#each posts as post}
	<Post
		img={post.feature_image}
		img_alt={post.feature_image_alt}
		title={post.title}
		author={post.authors[0].name}
		updated_at={post.updated_at}
		text={post.excerpt}
		href="/EN/posts/{post.slug}"
	/>
{/each}

<style>
	#main {
		height: 40vh;
		text-align: center;
	}

	#main-text {
		margin-top: 40vh;
	}

	#main-text h1 {
		color: var(--on-primary);
	}

	#main-text p {
		font-size: 20px;
	}

	#filters {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 3%;
		border-bottom: 1px solid var(--on-primary);
		border-top: 1px solid var(--on-primary);
	}

	#filters label {
		width: 82px;
		text-align: center;
		background-color: var(--on-primary);
		color: var(--primary);
		border: none;
		border-radius: 5px;
		padding: 3px 8px;
		margin: 1% 2% 1% 2%;
	}
</style>
