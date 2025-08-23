<script>
    import MailIcon from '$icons/mail';
    import {guests} from '$lib/stores/event.js';

    let subject = $state('');
    let message = $state('');

    let error = $state('');
    
    const validateData = () => {
        error = '';
        subject = subject.trim();
        message = message.trim();
        
        if (subject.length < 3) {
            error = 'Ingrese un asunto para el mensaje que sea más largo';
            return false;
        }

        if (message.length < 3) {
            error = 'Ingrese un mensaje que sea más largo';
            return false;
        }
        
        return true;
    }

    const sendEmails = () => {
        if (validateData()) {
            // TODO: send emails
        }
    }

</script>

<section class="bg-base-100 border-base-300 p-6">
    <div class="flex flex-col gap-5 w-full mb-3">
        
        <span class="text-xl tracking-wide">
            {#if $guests.length > 0 }
                {$guests.length} {$guests.length === 1 ? `invitado` : `invitados`} en lista
            {:else}
                Aun no tienes invitados
            {/if}
        </span>

        <label class="label flex flex-col items-start">
            <span>Asunto</span>
            <input bind:value={subject} type="text" class="input w-full" placeholder="Asunto de la invitación"/>
        </label>

        <label class="label flex flex-col items-start">
            <span>Mensaje</span>
            <textarea bind:value={message} class="textarea w-full" placeholder="Mensaje de la invitación"></textarea>
        </label>

        {#if error !== ''  }
            <span class="text-sm text-red-400">* {error}</span>
        {/if}
        

    </div>
    <div class="w-full flex justify-center items-center mt-7">
        {#if $guests.length > 0 }
            <button class="w-3/5 bg-teal-600 py-2.5 text-sm tracking-wider rounded-md px-2 uppercase flex justify-center items-center gap-2 cursor-pointer" onclick={sendEmails}>
                Enviar {$guests.length} {$guests.length === 1 ? 'invitación' : 'invitaciones'}
                <MailIcon size={18} />
            </button>
        {/if}
    </div>
</section>