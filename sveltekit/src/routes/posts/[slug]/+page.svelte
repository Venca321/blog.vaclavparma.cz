<script lang="ts">
	export let data;
	let post = data.post.posts[0];

	const date = new Date(post.updated_at);
	const time = date.toLocaleTimeString('cs-CZ', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});
</script>

<svelte:head>
	<meta name="description" content={post.excerpt} />
</svelte:head>

<section>
	<div id="heading">
		<h1>{post.title}</h1>
		<p>{time}</p>
	</div>
	<img loading="lazy" id="main-img" src={post.feature_image} alt={post.feature_image_alt} />
	<div id="text">
		{@html post.html}
	</div>
	<div id="info">
		<p>{post.authors[0].name}</p>
		<p>{time}</p>
	</div>
</section>

<style>
	section {
		width: 75%;
		margin: auto auto;
		margin-top: 10%;
		margin-bottom: -20vh;
		background-color: var(--blog);
		border-radius: 16px;
		opacity: 0.8;
	}

	#heading {
		padding-top: 4%;
		display: flex;
		width: 90%;
		margin: auto auto;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 4%;
	}

	h1 {
		font-size: 64px;
		margin-top: 0%;
		margin-bottom: 0%;
	}

	#info {
		display: flex;
		margin: auto auto;
		justify-content: space-between;
		border-top: 1px solid var(--on-tertiary);
		padding-bottom: 1.25%;
	}

	#info p {
		margin-left: 10%;
		margin-right: 10%;
		font-size: 18px;
	}

	#main-img {
		width: 90%;
		max-height: 80vh;
		margin-left: 5%;
		margin-bottom: -1.5%;
	}

	img {
		border-radius: 16px;
	}

	#text {
		margin-left: 25%;
		margin-right: 25%;
		margin-bottom: 15%;
	}

	@media (max-width: 800px) {
		section {
			width: 90%;
			margin-top: 20%;
		}

		h1 {
			font-size: 38px;
		}

		#text {
			margin-left: 10%;
			margin-right: 10%;
		}

		#heading {
			width: 92%;
			margin-bottom: 7%;
		}

		#main-img {
			margin-bottom: 1%;
		}

		#info p {
			font-size: 16px;
		}
	}
</style>
