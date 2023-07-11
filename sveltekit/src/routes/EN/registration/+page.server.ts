import type { Actions } from "./$types";
import GhostAdminAPI from '@tryghost/admin-api';
import { redirect } from "@sveltejs/kit";
import settings from "../../../settings"

export const actions: Actions = {
    register: async ({ request }) => {
        const formData = await request.formData();
        const email = String(formData.get("email"));
        const name = String(formData.get("name"));

        try {
            const api = new GhostAdminAPI({
                url: `http://${settings.backend.ip}:${settings.backend.port}`,
                key: settings.backend.admin_apikey,
                version: 'v3.2'
            });
    
            await api.members.add({email: email, name: name, newsletters:  [{"id": settings.newsletter.en}]})
        } catch (error){
            console.log(error);
            throw redirect(303, `/message?text=${encodeURIComponent('Registration failed')}&back=${encodeURIComponent('Go back to the blog')}`); 
        }   
        throw redirect(303, `/message?text=${encodeURIComponent('Registration was successful')}&back=${encodeURIComponent('Go back to the blog')}`); 
    }
}

