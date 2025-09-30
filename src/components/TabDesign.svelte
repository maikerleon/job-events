<!-- <script>
  import { information } from '$lib/stores/event.js';
  const onBgFile = e => {
    const f = e.target.files?.[0];
    if (f) $information.design.bgImage = URL.createObjectURL(f);
  };
</script>

<section class="bg-base-100 border-base-300 p-6">
  <div class="grid grid-cols-2 gap-4">

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
                  class="input w-28 h-8"
                  bind:value={$information.design.bgWidth} />
          </div>
        </label>

        <label class="text-sm">
          Alto
          <div class="flex items-center gap-2">
            <input type="range" min="480" max="3000" step="1"
                  bind:value={$information.design.bgHeight} class="w-full" />
            <input type="number" min="480" max="3000" step="1"
                  class="input w-28 h-8"
                  bind:value={$information.design.bgHeight} />
          </div>
        </label>
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

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Título (Y)</legend>
      <input type="range" min="-700" max="700" step="1" bind:value={$information.design.titleY} />
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
      <input type="range" min="-700" max="300" step="1" bind:value={$information.design.timeY} />
    </fieldset>
    
    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Hora (X)</legend>
      <input type="range" min="-700" max="300" step="1" bind:value={$information.design.timeX} />
    </fieldset>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Descripción (Y)</legend>
      <input type="range" min="-700" max="300" step="1" bind:value={$information.design.descY} />
    </fieldset>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Descripción (X)</legend>
      <input type="range" min="-200" max="250" step="1" bind:value={$information.design.descX} />
    </fieldset>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Web (Y)</legend>
      <input type="range" min="-300" max="300" step="1" bind:value={$information.design.webY} />
    </fieldset>
    
    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Web (X)</legend>
      <input type="range" min="-300" max="300" step="1" bind:value={$information.design.webX} />
    </fieldset>

    <fieldset class="fieldset w-full col-span-2">

      <legend class="fieldset-legend">Sombra de texto</legend>
      <label class="label cursor-pointer flex items-center gap-2">
        <input type="checkbox" class="toggle" bind:checked={$information.design.shadowEnabled} />
        <span>Activar</span>
      </label>

      <div class="grid grid-cols-4 gap-3 mt-2">
        <label class="text-sm">
          <span>Color</span>
          <input type="color" class="mt-1 input h-16 p-1" bind:value={$information.design.shadowColor} />
        </label>
        <div class="grid col-span-3 grid-cols-2 gap-x-3 gap-y-1">
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
      </div>

    </fieldset>

    <fieldset class="fieldset w-full">
        <legend class="fieldset-legend">Radio de borde</legend>
        <input type="range" min="0" max="30" step="1" bind:value={$information.design.borderRadius} />
      </fieldset>

      <fieldset class="fieldset w-full">
        <legend class="fieldset-legend">Grosor de borde</legend>
        <input type="range" min="0" max="16" step="1" bind:value={$information.design.borderWidth} />
    </fieldset>

  </div>
</section> -->




<script>
  import { information } from '$lib/stores/event.js';
  const onBgFile = e => {
    const f = e.target.files?.[0];
    if (f) $information.design.bgImage = URL.createObjectURL(f);
  };

  // ─────────────────────────────────────────────────────────────
  // NUEVO: Fuentes disponibles por defecto y manejo de subida
  // ─────────────────────────────────────────────────────────────
  const defaultFonts = [
    'Arial', 'Verdana', 'Times New Roman', 'Georgia',
    'Tahoma', 'Trebuchet MS', 'Courier New', 'Impact', 'System UI'
  ];

  function applyUploadedFont(name, url) {
    // inyecta @font-face para usar la fuente ya mismo
    const id = `font-${name.replace(/\s+/g, '-').toLowerCase()}`;
    let el = document.getElementById(id);
    const css = `
@font-face{
  font-family:'${name}';
  src: url('${url}');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}`;
    if (!el) {
      el = document.createElement('style');
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = css;

    // agrega a la lista de fuentes disponibles y selecciónala
    const current = $information.design.availableFonts ?? defaultFonts;
    $information.design.availableFonts = Array.from(new Set([...current, name]));
    $information.design.titleFontFamily = name;
  }

  async function onFontFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;

    // 1) intentamos guardar en servidor (persistente para futuras sesiones)
    //    Debes exponer un endpoint que reciba el archivo y devuelva { url, name }
    try {
      const fd = new FormData();
      fd.append('font', f);
      const res = await fetch('/api/fonts/upload', {
        method: 'POST',
        body: fd,
        credentials: 'include'
      });
      if (res.ok) {
        const { url, name } = await res.json();
        applyUploadedFont(name || f.name.replace(/\.[^.]+$/, ''), url);
        return;
      }
    } catch (_) {
      // si falla, continuamos con el fallback local
    }

    // 2) fallback: usar solo en esta sesión con ObjectURL (no persiste)
    const url = URL.createObjectURL(f);
    const name = f.name.replace(/\.[^.]+$/, '');
    applyUploadedFont(name, url);
  }

  // Mantén sincronizada una variable CSS para que puedas usarla donde pintas el título:
  $: document?.documentElement?.style.setProperty('--title-font', $information.design.titleFontFamily || 'inherit');
</script>

<section class="bg-base-100 border-base-300 p-6">
  <div class="grid grid-cols-2 gap-4">

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
                  class="input w-28 h-8"
                  bind:value={$information.design.bgWidth} />
          </div>
        </label>

        <label class="text-sm">
          Alto
          <div class="flex items-center gap-2">
            <input type="range" min="480" max="3000" step="1"
                  bind:value={$information.design.bgHeight} class="w-full" />
            <input type="number" min="480" max="3000" step="1"
                  class="input w-28 h-8"
                  bind:value={$information.design.bgHeight} />
          </div>
        </label>
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

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Título (Y)</legend>
      <input type="range" min="-700" max="700" step="1" bind:value={$information.design.titleY} />
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
      <input type="range" min="-700" max="300" step="1" bind:value={$information.design.timeY} />
    </fieldset>
    
    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Hora (X)</legend>
      <input type="range" min="-700" max="300" step="1" bind:value={$information.design.timeX} />
    </fieldset>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Descripción (Y)</legend>
      <input type="range" min="-700" max="300" step="1" bind:value={$information.design.descY} />
    </fieldset>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Descripción (X)</legend>
      <input type="range" min="-200" max="250" step="1" bind:value={$information.design.descX} />
    </fieldset>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Web (Y)</legend>
      <input type="range" min="-300" max="300" step="1" bind:value={$information.design.webY} />
    </fieldset>
    
    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Web (X)</legend>
      <input type="range" min="-300" max="300" step="1" bind:value={$information.design.webX} />
    </fieldset>

    <fieldset class="fieldset w-full col-span-2">

      <legend class="fieldset-legend">Sombra de texto</legend>
      <label class="label cursor-pointer flex items-center gap-2">
        <input type="checkbox" class="toggle" bind:checked={$information.design.shadowEnabled} />
        <span>Activar</span>
      </label>

      <div class="grid grid-cols-4 gap-3 mt-2">
        <label class="text-sm">
          <span>Color</span>
          <input type="color" class="mt-1 input h-16 p-1" bind:value={$information.design.shadowColor} />
        </label>
        <div class="grid col-span-3 grid-cols-2 gap-x-3 gap-y-1">
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
      </div>

    </fieldset>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Radio de borde</legend>
      <input type="range" min="0" max="30" step="1" bind:value={$information.design.borderRadius} />
    </fieldset>

    <fieldset class="fieldset w-full">
      <legend class="fieldset-legend">Grosor de borde</legend>
      <input type="range" min="0" max="16" step="1" bind:value={$information.design.borderWidth} />
    </fieldset>

    <!-- ─────────────────────────────────────────────────────────
         NUEVO: Selección/carga de tipografía para el TÍTULO
         (no moví nada; solo agregué este fieldset)
         ──────────────────────────────────────────────────────── -->
    <fieldset class="fieldset w-full col-span-2">
      <legend class="fieldset-legend">Tipografía del título</legend>

      <div class="grid grid-cols-2 gap-4">
        <label class="text-sm">
          Seleccionar fuente
          <select class="select w-full"
                  bind:value={$information.design.titleFontFamily}>
            {#each ($information.design.availableFonts ?? defaultFonts) as f}
              <option value={f} style={`font-family:${f}`}>{f}</option>
            {/each}
          </select>
        </label>

        <label class="text-sm">
          Cargar fuente personalizada (.ttf, .otf, .woff, .woff2)
          <input type="file"
                 accept=".ttf,.otf,.woff,.woff2"
                 class="file-input w-full"
                 on:change={onFontFile} />
          <span class="label text-xs opacity-70">
            Si tu backend implementa <code>/api/fonts/upload</code> la fuente se guardará para futuras ocasiones; si no, se aplicará solo en esta sesión.
          </span>
        </label>
      </div>
    </fieldset>

  </div>
</section>
