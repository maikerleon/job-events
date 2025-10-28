import supabase from '$lib/supabase.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    
    const { subject, message, guests, information } = await request.json();
    const {name, date, time, description, address} = information;

    const full_guests = guests.map(g => {
        return {
            name: g.name,
            email: g.email,
            token: crypto.randomUUID(),
            status: 'unconfirmed',
            updated_at: new Date()
        }
    });

    const {data, error} = await supabase.from('subject').insert({
        subject,
        message,
        description,
        name,
        date,
        time,
        location: address,
        card_config: information,
        guests: {
            list: full_guests
        },
        token: crypto.randomUUID(),
        address
    }).select();

    if ( error ) {
        return json({ success: false, error: error.message });
    }

    // Enviar correos

    return json({ success: true, data });

}