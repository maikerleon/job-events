<script>
    import Aside from '$components/Aside.svelte';
	import Preview from '$components/Preview.svelte';
    const { data } = $props();
    const { items } = data;
</script>

<div class="w-full py-10">
    
    <div class="flex w-full gap-10 max-w-7xl mx-auto">
        <Preview />
        
        <Aside />
    </div>

</div>