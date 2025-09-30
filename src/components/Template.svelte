<script>
  import { information } from '$lib/stores/event.js';
  import { normalizeTime, to12h } from '$lib/utils/time.js';

  function onBlur(e) {
    $information.time = normalizeTime(e.target.value);
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const month = date.toLocaleDateString("es-ES", { month: "short" }).toUpperCase();
    const day = date.getDate();
    return `${month.slice(0, 3)} ${day + 1}`;
  };

  const formatTime = (timeStr) => {
    let date = new Date(`1970-01-01T${timeStr}`);
    if (!timeStr) date = new Date();
    const options = { hour: "numeric", minute: "2-digit", hour12: true };
    return date.toLocaleTimeString("en-US", options);
  };

  const defaultBg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVLYM6ORuOZS8fc-mKlPj-HkTPlINmsD_7Q&amp;s";
  
  const logoSlots = [
    { key: 'logo1', x: 20 },
    { key: 'logo2', x: 230 },
    { key: 'logo3', x: 420 },
    { key: 'logo4', x: 620 },
    { key: 'logo5', x: 820 }
  ];

</script>

<svg
  id="invitacion"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1280 1600"
  class="w-full h-full"
  style={`--txt:${$information.design.textColor};
          --url:${$information.design.urlColor};
          --acc:${$information.design.accentColor};
          --stroke:${$information.design.strokeColor};
          --strokeW:${$information.design.borderWidth};
          --bg:${$information.design.bgColor};
          --txtOpacity:${$information.design.textOpacity};
          font-family:${$information.design.fontFamily};
          --titleFont:${$information.design.titleFontFamily || 'inherit'};`}
>

  <defs>
    <filter id="txtShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow
        dx={$information.design.shadowEnabled ? $information.design.shadowOffsetX : 0}
        dy={$information.design.shadowEnabled ? $information.design.shadowOffsetY : 0}
        stdDeviation={$information.design.shadowEnabled ? $information.design.shadowBlur : 0}
        flood-color={$information.design.shadowColor}
        flood-opacity={$information.design.shadowEnabled ? 1 : 0}
      />
    </filter>
  </defs>

  <g id="background" style:opacity={$information.design.bgOpacity}>
    {#if $information.design.bgMode === 'color'}
      <rect style="fill: var(--bg);" x="0" y="0" width="1280" height="1600" />
    {:else}
      <image
        href={$information.design.bgImage || defaultBg}
        width={$information.design.bgWidth}
        height={$information.design.bgHeight}
        style="-webkit-mask-image:linear-gradient(#000 50%, #0000 100%); mask-image:linear-gradient(#000 50%, #0000);"
        transform={`translate(${$information.design.bgX},${$information.design.bgY}) scale(${$information.design.bgScale})`}
        preserveAspectRatio="xMidYMid slice"
      />
    {/if}
  </g>

<g id="logo1">
  <foreignObject x="20" y="0" width="200" height="200" transform="matrix(1.25,0,0,1.10,0,0)">
    <div xmlns="http://www.w3.org/1999/xhtml" class="flex justify-center items-center h-full w-full scale-75">
      {#if $information.logo1}
        <img src={$information.logo1} alt="Logo 1" />
      {/if}
    </div>
  </foreignObject>
</g>


<g id="logo2">
  <foreignObject x="230" y="0" width="200" height="200" transform="matrix(1.25,0,0,1.10,0,0)">
    <div xmlns="http://www.w3.org/1999/xhtml" class="flex justify-center items-center h-full w-40 ">
      {#if $information.logo2}
        <img src={$information.logo2} alt="Logo 2" />
      {/if}
    </div>
  </foreignObject>
</g>

<g id="logo3">
  <foreignObject x="420" y="0" width="200" height="200" transform="matrix(1.25,0,0,1.10,0,0)">
    <div xmlns="http://www.w3.org/1999/xhtml" class="flex justify-center items-center h-full w-full">
      {#if $information.logo3}
        <img src={$information.logo3} alt="Logo 3" />
      {/if}
    </div>
  </foreignObject>
</g>

<g id="logo4">
  <foreignObject x="620" y="0" width="200" height="200" transform="matrix(1.25,0,0,1.10,0,0)">
    <div xmlns="http://www.w3.org/1999/xhtml" class="flex justify-center items-center h-full w-full">
      {#if $information.logo4}
        <img src={$information.logo4} alt="Logo 4" />
      {/if}
    </div>
  </foreignObject>
</g>

<g id="logo5">
  <foreignObject x="820" y="0" width="200" height="200" transform="matrix(1.25,0,0,1.10,0,0)">
    <div xmlns="http://www.w3.org/1999/xhtml" class="flex justify-center items-center h-full w-full">
      {#if $information.logo5}
        <img src={$information.logo5} alt="Logo 5" />
      {/if}
    </div>
  </foreignObject>
</g>


  <g id="title" transform={`translate(${$information.design.titleX},${$information.design.titleY})`}>
    <foreignObject x="0" y={680} width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p
          class="text-wrap text-8xl text-center mt-8 max-w-10/12 mx-auto line-clamp-2"
          style={`text-transform:${$information.design.uppercase ? 'uppercase' : 'none'};
                  color:${$information.design.textColor};
                  opacity:${$information.design.textOpacity};
                  text-shadow:${$information.design.shadowEnabled ? `${$information.design.shadowOffsetX}px ${$information.design.shadowOffsetY}px ${$information.design.shadowBlur}px ${$information.design.shadowColor}` : 'none'};
                  font-family: var(--titleFont), ${$information.design.fontFamily || 'sans-serif'};`}
        >
          <label for="name_event" class="cursor-alias">{$information.name || "Nombre del evento"}</label>
        </p>
      </div>
    </foreignObject>
  </g>

  <g id="date" transform={`translate(${$information.design.dateX},${$information.design.dateY})`}>
    <rect x="290" y="933.5" width="412" height="99.4" rx={$information.design.borderRadius} ry={$information.design.borderRadius} style="fill:#0000; stroke: var(--stroke); stroke-width: var(--strokeW); paint-order: stroke fill markers;" />
    <text
      filter={$information.design.shadowEnabled ? "url(#txtShadow)" : null}
      text-anchor="middle"
      class="text-center text-6xl font-extralight tracking-widest"
      style="transform: matrix(1, 0, 0, 1, 500, 1005); fill: var(--txt); fill-opacity: var(--txtOpacity);"
    >
      {$information.date ? formatDate($information.date) : formatDate(new Date())}
    </text>
  </g>

 
  <g id="time" transform={`translate(${$information.design.timeX},${$information.design.timeY})`}>
    <rect x="745" y="933" width="245" height="100" rx={$information.design.borderRadius} ry={$information.design.borderRadius} style="fill: var(--acc);" />
    <text
      filter={$information.design.shadowEnabled ? "url(#txtShadow)" : null}
      text-anchor="middle"
      class="text-center text-5xl font-extralight tracking-widest"
      style="transform: matrix(1, 0, 0, 1, 870, 1000); fill: var(--txt); fill-opacity: var(--txtOpacity);"
    >
      {$information.time ? formatTime($information.time) : formatTime()}
    </text>
  </g>

  <g id="description" transform={`translate(${$information.design.descX},${$information.design.descY})`}>
    <foreignObject x="0" y="1100" width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p
          class="text-wrap font-extralight italic text-5xl text-center mt-5 max-w-4/5 mx-auto line-clamp-3"
          style={`color:${$information.design.textColor};
                  opacity:${$information.design.textOpacity};
                  text-shadow:${$information.design.shadowEnabled ? `${$information.design.shadowOffsetX}px ${$information.design.shadowOffsetY}px ${$information.design.shadowBlur}px ${$information.design.shadowColor}` : 'none'};
                  white-space: pre-wrap;`}
        >
          <label for="description_event" class="cursor-alias">{$information.description || "Descripción del evento"}</label>
        </p>
      </div>
    </foreignObject>
  </g>

  <g id="logo">
    <foreignObject x="420" y="930" width="200" height="200" transform="matrix(1.25,0,0,1.35,0,0)">
      <div xmlns="http://www.w3.org/1999/xhtml" class="flex justify-center items-center h-full w-full scale-75">
        <label for="logo_principal" class="cursor-alias">
          <img src={$information.logo || 'https://ceascoahuila.gob.mx/wp-content/uploads/2024/02/Coahuila_Blanco-1024x295.png'} alt="Logo del evento" />
        </label>
      </div>
    </foreignObject>
  </g>



  <g id="web" transform={`translate(${$information.design.webX},${$information.design.webY})`}>
    
    <text
      filter={$information.design.shadowEnabled ? "url(#txtShadow)" : null}
      text-anchor="middle"
      class="text-5xl font-light tracking-widest"
      style="transform: matrix(0.961, 0, 0, 0.87, 640, 1550); fill: var(--url); fill: var(--txt); fill-opacity: var(--txtOpacity);"
    > {$information.address || "Dirección del evento"}
    </text>
  
  </g>


  



  
</svg>
