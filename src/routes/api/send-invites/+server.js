import { information } from '$lib/stores/event.js';
import supabase from '$lib/supabase.js';

export async function POST({ request }) {
    
    const {subject,message, guests, html } = await request.json();

    const res = await supabase.from('invites').insert({
        subject: subject,
        message: message,
        guests: $guests.map(g => ({ name: g.name, email: g.email })),
        html: html,
        information: information
    });


    return new Response(JSON.stringify(res),{
        headers: { 'Content-Type': 'application/json' }
    });
 }