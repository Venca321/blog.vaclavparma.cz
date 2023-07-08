import type { PageServerLoad } from "./$types";
import settings from "../../settings"

const key = "3028397c9ba109fe21b8aabb61"

export const load: PageServerLoad = async () => {
    const response = await fetch(`http://${settings.backend.ip}:${settings.backend.port}/ghost/api/content/posts?key=${key}&include=tags,authors`, {
        method: 'GET',
    });
    const data = await response.json();

    const posts = [];
    for (let post of data.posts) {
        for (let tag of post.tags) {
            if (tag.slug == "en") {
                posts.push(post);
            }
        }
    }

    return {posts: posts}
}