<script>
    import { information } from '$lib/stores/event.js';
</script>

<div class="bg-red-400 w-7/12">
    <span>{$information.name}</span>
    <span>{$information.date}</span>
    <span>{$information.time}</span>
    <span>{$information.description}</span>
    <span>{$information.url}</span>
</div>