import type { PageServerLoad } from "./$types";
import settings from "../settings"

const key = settings.backend.apikey;

export const load: PageServerLoad = async ({ url }) => {
    const response = await fetch(`http://${settings.backend.ip}:${settings.backend.port}/ghost/api/content/posts?key=${key}&include=tags,authors&filter=tag:cs`, {
        method: 'GET',
    });
    const data = await response.json();
    const posts = data.posts;

    return {posts: posts}
}