// @ts-nocheck
import type { PageServerLoad } from "./$types";

const key = "3028397c9ba109fe21b8aabb61"

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
    let slug = params.slug;
    const response = await fetch("http://ghost:2368/ghost/api/content/posts/slug/"+slug+"?key="+key+"&include=tags,authors", {
        method: 'GET',
    });
    const data = await response.json();

    return {post: data}
}