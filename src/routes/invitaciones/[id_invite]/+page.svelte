<script>
    const { data } = $props();
    const { invite, guest, auth } = data;
</script>

{#if auth }
    <!-- invita.name -->
    <!-- Parte visual que muestre un titulo que diga "Haz recibido una invitación para "Nombre del evento" " -->
    <!-- Asistirás o rechazar -->
     <!-- onclick -->
     <!-- sendResponse("accepted") -->
      <!-- sendResponse("rejected") -->
       <!-- clg dentro del a funcion con el valor de la respuesta -->
{/if}

<!-- Crear la api para guardar la respuesta -->
<!-- Vamos a enviar los correos de invitacion y de aceptacion o rechazo -->