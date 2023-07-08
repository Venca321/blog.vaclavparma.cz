<script lang="ts">
	export let data;

	let posts: any[] = [];
	try {
		posts = data.posts;
	} catch (error) {
		console.log(error);
	}
</script>

{#each posts as post}
	<div>
		<img src={post.feature_image} alt={post.feature_image_alt} />
		<h2>{post.title}</h2>
		<p>{post.authors[0].name}</p>
		<p>{post.updated_at}</p>
		<p>{post.reading_time}</p>
		{#each post.tags as tag}
			<p>{tag.name}</p>
		{/each}
		<p>{post.excerpt}</p>
		<a href="/en/posts/{post.slug}">Odkaz</a>
	</div>
{/each}
