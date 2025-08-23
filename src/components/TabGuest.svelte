<script>
    import PlusIcon from '$icons/plus';
    import TrashIcon from '$icons/trash';
    import {guests} from '$lib/stores/event.js';
  
    const addGuest = () => {
        $guests = [
            ...$guests,
            {
                id: crypto.randomUUID(),
                name: '',
                email: '',
            }
        ];
    }

    const removeGuest = (id) => {
        $guests = $guests.filter(t => t.id !== id);
    }

</script>

<section class="bg-base-100 border-base-300 px-4 pt-6 pb-4">
    <header class="flex items-center justify-between border-b border-zinc-700 pb-4">
        <h3 class="text-2xl tracking-wide">Invitados</h3>
        <button class="flex items-center gap-1 bg-teal-400 text-zinc-800 px-3 py-1 rounded cursor-pointer" onclick={addGuest}>
            <PlusIcon size={18} />
            Agregar
        </button>
    </header>
    <div class="flex w-full mt-8">
        <ul class="w-full flex flex-col gap-2">
            {#each $guests as g, index }
                <li class="w-full flex bg-zinc-900 px-3 py-2 rounded-xl gap-2">
                    <input bind:value={g.name} class="w-5/12 bg-zinc-800 px-3 rounded-md focus:outline-zinc-600" type="text" placeholder="Invitado {index + 1}" required>
                    <input bind:value={g.email} class="w-6/12 bg-zinc-800 px-3 rounded-md focus:outline-zinc-600" type="email" placeholder="Correo invitado {index + 1}" required>
                    <button class="flex-1 flex justify-center py-1 px-1.5 hover:bg-red-600 transition duration-300 rounded-full items-center cursor-pointer bg-red-700" onclick={() => removeGuest(g.id)}>
                        <TrashIcon size={14} />
                    </button>
                </li>
            {:else}
                <p class="w-full text-center pb-2">No hay invitados</p>
            {/each}
        </ul>
    </div>
    <footer class="flex justify-end items-center mt-5 pr-1 border-t border-zinc-700 pt-4">
        <span><strong>Invitados:</strong> {$guests.length}</span>
    </footer>
</section>