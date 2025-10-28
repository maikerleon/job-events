import supabase from '$lib/supabase.js';
import { redirect } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    
    const { id_invite, id_guest, choice } = await request.json();

    if ( !id_invite || !id_guest || !choice ) {
        throw redirect(307, '/');
    }

    if ( !['accepted', 'rejected'].includes(choice) ) {
        throw redirect(307, '/');
    }

    const { data: invite } = await supabase
        .from('subject')
        .select('guests')
        .eq('id', id_invite)
        .single();
    
    let list = [...invite.guests.list];
    const index_guest = list.findIndex(g => g.token === id_guest);
    if ( index_guest === -1) {
        throw redirect(307, '/');
    }

    if(list[index_guest].status !== 'unconfirmed') {
        throw redirect(307, '/');
    }

    list[index_guest] = {...list[index_guest], status: choice};
    const new_guests = {list: [...list]};

    await supabase
        .from('subject')
        .update({ guests: new_guests })
        .eq('id', id_invite);

    // Enviar confirmacion de respuesta al creador de la invitacion

    // if(error) { 
        // return json({ success: false, error:"Error al enviar la confirmacion de tal...." });
    // }

    return json({ success: true });

}