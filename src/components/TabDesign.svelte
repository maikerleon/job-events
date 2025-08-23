<script>
  import { information } from '$lib/stores/event.js';
  const onBgFile = e => {
    const f = e.target.files?.[0];
    if (f) $information.design.bgImage = URL.createObjectURL(f);
  };
</script>


<fieldset class="fieldset w-full col-span-2">
  <legend class="fieldset-legend">Imagen de fondo</legend>
  <input type="file" class="file-input w-full" accept="image/*"
         on:change={(e) => {
           const f = e.target.files?.[0];
           if (f) $information.design.bgImage = URL.createObjectURL(f);
         }} />
</fieldset>

<fieldset class="fieldset w-full col-span-2">
  <legend class="fieldset-legend">Tamaño del fondo (px)</legend>

  <div class="grid grid-cols-2 gap-4">
    <label class="text-sm">
      Ancho
      <div class="flex items-center gap-2">
        <input type="range" min="320" max="2560" step="1"
               bind:value={$information.design.bgWidth} class="w-full" />
        <input type="number" min="320" max="2560" step="1"
               class="input w-28"
               bind:value={$information.design.bgWidth} />
      </div>
    </label>

    <label class="text-sm">
      Alto
      <div class="flex items-center gap-2">
        <input type="range" min="480" max="3000" step="1"
               bind:value={$information.design.bgHeight} class="w-full" />
        <input type="number" min="480" max="3000" step="1"
               class="input w-28"
               bind:value={$information.design.bgHeight} />
      </div>
    </label>
  </div>

  <div class="mt-3">
    <button type="button" class="btn"
      on:click={() => {
        $information.design.bgWidth = 1280;
        $information.design.bgHeight = 1600;
      }}>
      Restablecer a 1280 × 1600
    </button>
  </div>
</fieldset>


<fieldset class="fieldset w-full">
  <legend class="fieldset-legend">Opacidad del fondo</legend>
  <input type="range" min="0" max="1" step="0.01" bind:value={$information.design.bgOpacity} />
</fieldset>

<fieldset class="fieldset w-full">
  <legend class="fieldset-legend">Opacidad de texto</legend>
  <input type="range" min="0" max="1" step="0.01" bind:value={$information.design.textOpacity} />
</fieldset>


<div class="grid grid-cols-2 gap-4 col-span-2">
  <fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Título (Y)</legend>
    <input type="range" min="-700" max="300" step="1" bind:value={$information.design.titleY} />
  </fieldset>

  <fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Título (X)</legend>
    <input type="range" min="-300" max="300" step="1" bind:value={$information.design.titleX} />
  </fieldset>

  <fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Fecha (Y)</legend>
    <input type="range" min="-1000" max="600" step="1" bind:value={$information.design.dateY} />
  </fieldset>

  <fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Fecha (X)</legend>
    <input type="range" min="-200" max="600" step="1" bind:value={$information.design.dateX} />
  </fieldset>

  <fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Hora (Y)</legend>
    <input type="range" min="-300" max="300" step="1" bind:value={$information.design.timeY} />
  </fieldset>
  
  <fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Hora (X)</legend>
    <input type="range" min="-300" max="300" step="1" bind:value={$information.design.timeX} />
  </fieldset>

  <fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Descripción (Y)</legend>
    <input type="range" min="-300" max="300" step="1" bind:value={$information.design.descY} />
  </fieldset>

  <fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Descripción (X)</legend>
    <input type="range" min="-300" max="300" step="1" bind:value={$information.design.descX} />
  </fieldset>

  <fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Web (Y)</legend>
    <input type="range" min="-300" max="300" step="1" bind:value={$information.design.webY} />
  </fieldset>
   
   <fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Web (X)</legend>
    <input type="range" min="-300" max="300" step="1" bind:value={$information.design.webX} />
  </fieldset>

</div>

<fieldset class="fieldset w-full col-span-2">

  <legend class="fieldset-legend">Sombra de texto</legend>
  <label class="label cursor-pointer flex items-center gap-2">
    <input type="checkbox" class="toggle" bind:checked={$information.design.shadowEnabled} />
    <span>Activar</span>
  </label>

  <div class="grid grid-cols-4 gap-3 mt-2">
    <label class="text-sm">Color
      <input type="color" class="input h-10 p-1" bind:value={$information.design.shadowColor} />
    </label>
    <label class="text-sm">Offset X
      <input type="range" min="-20" max="20" step="1" bind:value={$information.design.shadowOffsetX} />
    </label>
    <label class="text-sm">Offset Y
      <input type="range" min="-20" max="20" step="1" bind:value={$information.design.shadowOffsetY} />
    </label>
    <label class="text-sm">Blur
      <input type="range" min="0" max="20" step="1" bind:value={$information.design.shadowBlur} />
    </label>
  </div>

</fieldset>

<div class="grid grid-cols-2 gap-4">

  <fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Radio de borde</legend>
    <input type="range" min="0" max="30" step="1" bind:value={$information.design.borderRadius} />
  </fieldset>

  <fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Grosor de borde</legend>
    <input type="range" min="0" max="16" step="1" bind:value={$information.design.borderWidth} />
  </fieldset>

</div>