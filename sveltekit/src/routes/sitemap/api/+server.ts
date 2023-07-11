
import settings from "../../../settings.js"

const key = settings.backend.apikey;
const response = await fetch(`http://${settings.backend.ip}:${settings.backend.port}/ghost/api/content/posts?key=${key}&include=tags`, {
    method: 'GET',
});
const data = await response.json();

let posts: any[] = []
for (const post in data.posts) {
  for (const tag in data.posts[post].tags) {
    if (data.posts[post].tags[tag].slug === "cs") {
      posts.push({title: data.posts[post].title, slug: `posts/${data.posts[post].slug}`, updatedAt: data.posts[post].updated_at})
    }
    if (data.posts[post].tags[tag].slug === "en") {
      posts.push({title: data.posts[post].title, slug: `EN/posts/${data.posts[post].slug}`, updatedAt: data.posts[post].updated_at})
    }
  }
}


const pages: any[] = ["EN"] //list of pages as a string ex. ["about", "blog", "contact"]

const site = "https://blog.vaclavparma.cz"

export async function GET({
    url
}) {
    const body = sitemap(posts, pages);
    const response = new Response(body);
    response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
    response.headers.set('Content-Type', 'application/xml');
    return response;
}

const sitemap = (posts: any, pages: any) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages.map((page: any) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `).join('')}
  ${posts.map((post: any) => post.visible ? null : `
  <url>
    <loc>${site}/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${post.updatedAt}</lastmod>
    <priority>0.3</priority>
  </url>
  `
		)
		.join('')}
</urlset>`;