import type { PageServerLoad } from "./$types";
import settings from "../../../../settings"

const key = "3028397c9ba109fe21b8aabb61"

export const load: PageServerLoad = async ({ params }) => {
    let slug = params.slug;
    const response = await fetch(`http://${settings.backend.ip}:${settings.backend.port}/ghost/api/content/posts/slug/${slug}?key=${key}&include=tags,authors`, {
        method: 'GET',
    });
    const data = await response.json();

    return {post: data}
}