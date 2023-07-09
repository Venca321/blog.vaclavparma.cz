<script lang="ts">
	import Post from '$lib/components/Post.svelte';

	export let data;

	let posts: any[] = [];
	try {
		posts = data.posts;
	} catch (error) {
		console.log(error);
	}
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

{#each posts as post}
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
</style>
