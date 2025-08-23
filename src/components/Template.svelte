<script>
    import { information } from '$lib/stores/event.js';

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const month = date.toLocaleDateString("es-ES", { month: "short" }).toUpperCase();
        const day = date.getDate();
        return `${month.slice(0, 3)} ${day+1}`;
    };

    const formatTime = (timeStr) => {
        let date = new Date(`1970-01-01T${timeStr}`);
        if(!timeStr) date = new Date();
        const options = { hour: "numeric", minute: "2-digit", hour12: true };
        return date.toLocaleTimeString("en-US", options);
    };

</script>
<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1600" class="w-full h-full">
    <defs>
		<image width="1024" height="500" id="img2" href="https://www.protocoloimep.com/app/uploads/2016/11/evento-sostenible.png" />
		<image  width="296" height="86" id="img3" href="{$information.logo || "https://upload.wikimedia.org/wikipedia/commons/d/dd/Coca-Cola_logo_white.png"}" />
	</defs>
    <style>
        .mask-fade-bottom-quick {
            -webkit-mask-image: linear-gradient(#000 50%, #0000 100%);
            mask-image: linear-gradient(#000 50%, #0000);
        }
        text {
            fill:white;
        }
        .s0 {
            fill: #000000;
        }
        .s4 {
            fill: #000000;
            stroke: #ffffff;
            paint-order: stroke fill markers;
            stroke-linejoin: round;
            stroke-width: 6;
        }
        .s6 {
            fill: #50c5c2;
        }
    </style>
    <use id="Background" href="#img1" x="0" y="0" />
    <g id="backgroud">
        <path id="Shape 3" fill-rule="evenodd" class="s0" d="m1280 0v1600h-1280v-1600z" />
        <use id="evento-sostenible" class="mask-fade-bottom-quick" href="#img2" transform="matrix(1.25,0,0,1.35,0,0)" />
    </g>
   <g id="title">
        <foreignObject x="0" y="-30" width="100%" height="100%">
               <div xmlns="http://www.w3.org/1999/xhtml" class="flex justify-center items-center h-full">
                <p class="text-wrap text-8xl text-center mt-8 max-w-10/12 mx-auto line-clamp-2 uppercase">
                    {$information.name || "Nombre del evento"}
                </p>
            </div>
        </foreignObject>
    </g>
    <g id="date">
        <path id="Shape 1" fill-rule="evenodd" class="s4" d="m290 933.5h412c5.5 0 10 4.5 10 10v79.4c0 5.5-4.5 10-10 10h-412c-5.5 0-10-4.5-10-10v-79.4c0-5.5 4.5-10 10-10z" />
        <text text-anchor="middle" class="text-center text-6xl font-extralight tracking-widest" style="transform: matrix(1, 0, 0, 1, 500, 1005);">
            {$information.date ? formatDate($information.date) : formatDate(new Date())}
        </text>
    </g>
    <g id="time">
        <path id="Shape 2" fill-rule="evenodd" class="s6" d="m745 933h245c5.5 0 10 4.5 10 10v80c0 5.5-4.5 10-10 10h-245c-5.5 0-10-4.5-10-10v-80c0-5.5 4.5-10 10-10z" />
        <text text-anchor="middle" class="text-center text-5xl font-extralight tracking-widest" id="08 AM" style="transform: matrix(1, 0, 0, 1, 870, 1000);">
            {$information.time ? formatTime($information.time) : formatTime()}
        </text>
    </g>
    <g id="description">
        <foreignObject x="0" y="1100" width="100%" height="100%">
               <div xmlns="http://www.w3.org/1999/xhtml">
                <p class="text-wrap font-extralight italic text-5xl text-center mt-5 max-w-4/5 mx-auto line-clamp-3">
                    {$information.description || "Descripción del evento"}
                </p>
            </div>
        </foreignObject>
    </g>
    <g id="logo">
        <foreignObject x="420" y="930" width="200" height="200" transform="matrix(1.25,0,0,1.35,0,0)">
            <div class="flex justify-center items-center h-full w-full">
                <img src="{$information.logo || "https://upload.wikimedia.org/wikipedia/commons/d/dd/Coca-Cola_logo_white.png"}" alt="Logo del evento">
            </div>
        </foreignObject>
    </g>
    <g id="web">
        <text text-anchor="middle" class="text-5xl font-light tracking-widest" style="transform: matrix(0.961, 0, 0, 0.53, 640, 1550);">
            {$information.url || "www.ejemplo.com"}
        </text>
    </g>
</svg>