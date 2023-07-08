<script lang="ts">
	export let data;
	let post = data.post.posts[0];
</script>

<img src={post.feature_image} alt={post.feature_image_alt} />

<h1>{post.title}</h1>

<p>{post.authors[0].name}</p>

<p>{post.reading_time}</p>

<p>{post.updated_at}</p>

{#each post.tags as tag}
	<p>{tag.name}</p>
{/each}

{@html post.html}
