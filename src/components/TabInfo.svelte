<script>
    import { information } from '$lib/stores/event.js';
    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            $information.logo = URL.createObjectURL(file);
        }
    }
</script>

<section class="bg-base-100 border-base-300 p-6">
    <div class="grid grid-cols-2 gap-4">

        <fieldset class="fieldset w-full col-span-2">
            <legend class="fieldset-legend">Nombre del evento</legend>
            <input type="text" class="input w-full" placeholder="Nombre del evento" id="name" name="name" bind:value={$information.name} />
        </fieldset>
        
        <fieldset class="fieldset w-full">
            <legend class="fieldset-legend">Fecha</legend>
            <input type="date" class="input w-full" id="date" name="date" bind:value={$information.date} />
        </fieldset>
        
        <fieldset class="fieldset w-full">
            <legend class="fieldset-legend">Hora</legend>
            <input type="time" class="input w-full" id="time" name="time" bind:value={$information.time} />
        </fieldset>
        
        <fieldset class="fieldset w-full col-span-2">
            <legend class="fieldset-legend">Breve descripción</legend>
            <textarea class="input w-full min-h-24 pt-2" placeholder="Breve descripción" id="description" name="description" bind:value={$information.description}></textarea>
        </fieldset>
        
        <fieldset class="fieldset w-full">
            <legend class="fieldset-legend">Logo</legend>
            <input type="file" class="file-input" id="logo" name="logo" accept="image/*" onchange={handleFileChange} />
            <label class="label" for="logo">Tamaño máximo 2MB</label>
        </fieldset>
        
        <fieldset class="fieldset w-full">
            <legend class="fieldset-legend">Sitio web</legend>
            <input type="url" class="input w-full" placeholder="www.ejemplo.com" id="url" name="url" bind:value={$information.url} />
        </fieldset>
        
    </div>
</section>