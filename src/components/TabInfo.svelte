<script>
  import { information } from '$lib/stores/event.js';

  const handleFileChange = (event, key) => {
    const file = event.target.files?.[0];
    if (file) $information[key] = URL.createObjectURL(file);
  };

  const clearLogo = (key) => {
    $information[key] = '';
  };

  const logos = ['logo1', 'logo2', 'logo3', 'logo4', 'logo5'];
</script>

<section class="bg-base-100 border-base-300 p-6">
  <div class="grid grid-cols-2 gap-4">

    <fieldset class="fieldset w-full col-span-2">
      <legend class="fieldset-legend">Nombre del evento</legend>
      <input class="input w-full" placeholder="Nombre del evento"
             id="name_event" name="name_event" bind:value={$information.name} />
    </fieldset>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Fecha</legend>
      <input type="date" class="input w-full" id="date" name="date" bind:value={$information.date} />
    </fieldset>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Hora</legend>
      <input type="time" class="input w-full" id="time_event" name="time_event" bind:value={$information.time} />
    </fieldset>

    <fieldset class="fieldset w-full col-span-2">
      <legend class="fieldset-legend">Breve descripción</legend>
      <textarea class="input w-full min-h-24 pt-2" placeholder="Breve descripción"
                id="description_event" name="description_event" bind:value={$information.description}></textarea>
    </fieldset>

    <fieldset class="fieldset w-full col-span-2">
      <legend class="fieldset-legend">Dirección</legend>
      <input type="text" class="input w-full" placeholder="Dirección"
             id="address_event" name="address_event" bind:value={$information.address} />
    </fieldset>
   
    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Logo principal</legend>
      <input type="file" class="file-input" id="logo_principal" name="logo_principal" accept="image/*"
             onchange={(e)=>handleFileChange(e,'logo')} />
      <span class="label">Tamaño máximo 2MB</span>

      {#if $information.logo}
        <div class="mt-2 flex items-center gap-2">
          <img src={$information.logo} alt="Logo principal" class="h-12 object-contain m-8 border rounded scale-90" />
          <button type="button"
                  class="btn btn-error btn-xs"
                  onclick={() => clearLogo('logo')}>
            Limpiar
          </button>
        </div>
      {/if}
    </fieldset>

    {#each logos as logo, i}
      <fieldset class="fieldset w-full">
        <legend class="fieldset-legend">Logo {i + 1}</legend>
        <input type="file" class="file-input" id={logo} name={logo} accept="image/*"
               onchange={(e)=>handleFileChange(e, logo)} />
        <label class="label" for={logo}>Tamaño máximo 2MB</label>

        {#if $information[logo]}
          <div class="mt-2 flex items-center gap-2">
            <img src={$information[logo]} alt={"Logo " + (i+1)} class="h-12 object-contain border rounded" />
            <button type="button"
                    class="btn btn-error btn-xs"
                    onclick={() => clearLogo(logo)}>
              Limpiar
            </button>
          </div>
        {/if}
      </fieldset>
    {/each}

  </div>
</section>