import type { Actions } from "./$types";
import GhostAdminAPI from '@tryghost/admin-api';
import { redirect } from "@sveltejs/kit";
import settings from "../../../settings"

export const actions: Actions = {
    cancel: async ({ request }) => {
        const formData = await request.formData();
        const email = String(formData.get("email"));

        try {
            const api = new GhostAdminAPI({
                url: `http://${settings.backend.ip}:${settings.backend.port}`,
                key: settings.backend.admin_apikey,
                version: 'v3.2'
            });
    
            const response:any[] = await api.members.browse()
            for (const user in response) {
                if (response[user].email === email) {
                    await api.members.delete({id: response[user].id})
                }
            }
        } catch (error){
            console.log(error);
            throw redirect(303, `/message?text=${encodeURIComponent('Odstranění účtu se nepovedlo')}&back=${encodeURIComponent('Přejít zpět na blog')}`); 
        }
        throw redirect(303, `/message?text=${encodeURIComponent('Odstranění účtu proběhlo úspěšně')}&back=${encodeURIComponent('Přejít zpět na blog')}`); 
    }
}