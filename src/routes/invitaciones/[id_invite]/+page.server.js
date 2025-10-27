import supabase from '$lib/supabase';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {

    const { id_invite } = params;
    const id_guest = url.searchParams.get('g');

    const { data: invite } = await supabase
        .from('subject')
        .select('*')
        .eq('id', id_invite)
        .single();

    if ( !invite || !invite.id || invite.guests.list.length <= 0 ) {
        redirect(307, '/');
    }

    const guest = invite.guests.list.find(g => g.token === id_guest) || null;
    if ( !guest ) {
        redirect(307, '/');
    }

    return {
        invite,
        guest,
        auth: true
    };
    
}