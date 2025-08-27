<script>
 
  import MailIcon from '$icons/mail';
  import { guests, information } from '$lib/stores/event.js';
  import { browser } from '$app/environment';
  import { generateImage } from '$lib/utils/converts.js';

  let subject = '';
  let message = '';
  let error = '';
  let sending = false;

  const validateData = () => {
    error = '';
    subject = subject.trim();
    message = message.trim();

    if (subject.length < 3) { error = 'Ingrese un asunto más largo'; return false; }
    if (message.length < 3) { error = 'Ingrese un mensaje más largo'; return false; }
    if ($guests.length === 0) { error = 'Agregue al menos un invitado'; return false; }

    const bad = $guests.filter(g => !g.email || !/.+@.+\..+/.test(g.email));
    if (bad.length) { error = 'Hay correos inválidos en la lista'; return false; }

    return true;
  };

    function getInvitationHTML() {
    if (!browser) return '';
    const svg = document.getElementById('invitacion') || document.querySelector('svg');
    if (!svg) return '';

    let html = svg.outerHTML;
    html = html.replace(/<br( [^>]*)?>/gi, '<br$1 />');
    html = html.replace(/<img( [^>]*?)>(?!\s*<\/img>)/gi, '<img$1 />');
    html = html.replace(/\b(xlink:href|href|src)="([^"]*)"/gi,
        (m, attr, val) => `${attr}="${val.replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, '&amp;')}"`);
    return html;
    }


  async function onSend() {
    if (!validateData()) return;
    sending = true;

    try {
      const html = getInvitationHTML();
      const payload = {
        subject,
        message,
        guests: $guests.map(g => ({ name: g.name, email: g.email })),
        html
      };

      const res = await fetch('/api/send-invites', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
      
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Fallo el envío');

      alert(`¡Listo! Se enviaron ${data.sent} invitaciones.`);
    } catch (e) {
      console.error(e);
      error = e.message || 'Error al enviar';
    } finally {
      sending = false;
    }
  }

 
</script>

<section class="bg-base-100 border-base-300 p-6">
  <div class="flex flex-col gap-5 w-full mb-3">
    <span class="text-xl tracking-wide">
      {#if $guests.length > 0 }
        {$guests.length} {$guests.length === 1 ? `invitado` : `invitados`} en lista
      {:else}
        Aún no tienes invitados
      {/if}
    </span>

    <label class="label flex flex-col items-start">
      <span>Asunto</span>
      <input bind:value={subject} type="text" class="input w-full" placeholder="Asunto de la invitación" />
    </label>
    
    <label class="label flex flex-col items-start">
      <span>Mensaje</span>
      <textarea bind:value={message} class="textarea w-full" placeholder="Mensaje de la invitación"></textarea>
    </label>

    {#if error}
      <span class="text-sm text-red-400">* {error}</span>
    {/if}
  </div>

  <div class="w-full flex justify-center items-center mt-7">
    {#if $guests.length > 0}
      <button
        class="w-3/5 bg-teal-600 py-2.5 text-sm tracking-wider rounded-md px-2 uppercase flex justify-center items-center gap-2 cursor-pointer disabled:opacity-60"
        onclick={onSend}
        disabled={sending}
      >
        {sending ? 'Enviando…' : `Enviar ${$guests.length} ${$guests.length === 1 ? 'invitación' : 'invitaciones'}`}
        <MailIcon size={18} />
      </button>
    {/if}
    <button onclick={() => generateImage('invitacion', `Invitación a ${$information.name}`)} class="cursor-pointer absolute">Descargar</button>

  </div>

</section>
