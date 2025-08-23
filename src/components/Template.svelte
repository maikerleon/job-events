<script>
  import { information } from '$lib/stores/event.js';

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

  $: d = $information.design;

  const defaultBg = "https://img.lovepik.com/background/20211022/large/lovepik-technological-background-image_402010515.jpg";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1280 1600"
  class="w-full h-full"
  style={`--txt:${d.textColor};
          --url:${d.urlColor};
          --acc:${d.accentColor};
          --stroke:${d.strokeColor};
          --strokeW:${d.borderWidth};
          --bg:${d.bgColor};
          --txtOpacity:${d.textOpacity};
          font-family:${d.fontFamily};`}
>
  <style>
    .mask-fade-bottom-quick{ -webkit-mask-image:linear-gradient(#000 50%, #0000 100%); mask-image:linear-gradient(#000 50%, #0000); }
    text{ fill: var(--txt); fill-opacity: var(--txtOpacity); }
    .s0{ fill: var(--bg); }
    .box-stroke{ fill:#0000; stroke: var(--stroke); stroke-width: var(--strokeW); paint-order: stroke fill markers; }
    .box-accent{ fill: var(--acc); }
  </style>

  <defs>
    <filter id="txtShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow
        dx={d.shadowEnabled ? d.shadowOffsetX : 0}
        dy={d.shadowEnabled ? d.shadowOffsetY : 0}
        stdDeviation={d.shadowEnabled ? d.shadowBlur : 0}
        flood-color={d.shadowColor}
        flood-opacity={d.shadowEnabled ? 1 : 0}
      />
    </filter>
  </defs>


  <g id="background" style:opacity={d.bgOpacity}>
    {#if d.bgMode === 'color'}
      <rect class="s0" x="0" y="0" width="1280" height="1600" />
    {:else}
      <image
        href={$information.design.bgImage || defaultBg}
        width={d.bgWidth}
        height={d.bgHeight}
        class="mask-fade-bottom-quick"
        transform={`translate(${d.bgX},${d.bgY}) scale(${d.bgScale})`}
        preserveAspectRatio="xMidYMid slice"
      />
    {/if}
  </g>

  <g id="title" transform={`translate(${d.titleX},${d.titleY})`}>
    <foreignObject x="0" y="-30" width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml" class="flex justify-center items-center h-full">
        <p
          class="text-wrap text-8xl text-center mt-8 max-w-10/12 mx-auto line-clamp-2"
          style={`text-transform:${d.uppercase ? 'uppercase' : 'none'};
                  color:${d.textColor};
                  opacity:${d.textOpacity};
                  text-shadow:${d.shadowEnabled ? `${d.shadowOffsetX}px ${d.shadowOffsetY}px ${d.shadowBlur}px ${d.shadowColor}` : 'none'};`}
        >
          {$information.name || "Nombre del evento"}
        </p>
      </div>
    </foreignObject>
  </g>


  <g id="date" transform={`translate(${d.dateX},${d.dateY})`}>
    <rect x="290" y="933.5" width="412" height="99.4" rx={d.borderRadius} ry={d.borderRadius} class="box-stroke" />
    <text
      filter={d.shadowEnabled ? "url(#txtShadow)" : null}
      text-anchor="middle"
      class="text-center text-6xl font-extralight tracking-widest"
      style="transform: matrix(1, 0, 0, 1, 500, 1005);"
    >
      {$information.date ? formatDate($information.date) : formatDate(new Date())}
    </text>
  </g>

 
  <g id="time" transform={`translate(${d.timeX},${d.timeY})`}>
    <rect x="745" y="933" width="245" height="100" rx={d.borderRadius} ry={d.borderRadius} class="box-accent" />
    <text
      filter={d.shadowEnabled ? "url(#txtShadow)" : null}
      text-anchor="middle"
      class="text-center text-5xl font-extralight tracking-widest"
      style="transform: matrix(1, 0, 0, 1, 870, 1000);"
    >
      {$information.time ? formatTime($information.time) : formatTime()}
    </text>
  </g>


  <g id="description" transform={`translate(${d.descX},${d.descY})`}>
    <foreignObject x="0" y="1100" width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p
          class="text-wrap font-extralight italic text-5xl text-center mt-5 max-w-4/5 mx-auto line-clamp-3"
          style={`color:${d.textColor};
                  opacity:${d.textOpacity};
                  text-shadow:${d.shadowEnabled ? `${d.shadowOffsetX}px ${d.shadowOffsetY}px ${d.shadowBlur}px ${d.shadowColor}` : 'none'};`}
        >
          {$information.description || "Descripción del evento"}
        </p>
      </div>
    </foreignObject>
  </g>

  <g id="logo">
    <foreignObject x="420" y="930" width="200" height="200" transform="matrix(1.25,0,0,1.35,0,0)">
      <div class="flex justify-center items-center h-full w-full">
        <img src={$information.logo || 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Coca-Cola_logo_white.png'} alt="Logo del evento">
      </div>
    </foreignObject>
  </g>

  <g id="web" transform={`translate(${d.webX},${d.webY})`}>
    <text
      filter={d.shadowEnabled ? "url(#txtShadow)" : null}
      text-anchor="middle"
      class="text-5xl font-light tracking-widest"
      style="transform: matrix(0.961, 0, 0, 0.53, 640, 1550); fill: var(--url);"
    >
      {$information.url || "www.ejemplo.com"}
    </text>
  </g>
</svg>