<script>
    import BookTypeIcon from '$icons/book-type';
    import PaletteIcon  from '$icons/palette';
    import UsersIcon  from '$icons/users';
	import TabDesign from '$components/TabDesign.svelte';
	import TabGuest from '$components/TabGuest.svelte';
	import TabInfo from '$components/TabInfo.svelte';

    let tabSelected = $state('info');

</script>

<aside class="bg-zinc-700 rounded-xl p-5 w-5/12">
    <div class="tabs tabs-lift">
        <label class="tab flex gap-1 items-center">
            <input type="radio" name="tabs" value="info" bind:group={tabSelected} />
            <BookTypeIcon size={18} />
            Información
        </label>

        <label class="tab flex gap-1 items-center">
            <input type="radio" name="tabs" value="design" bind:group={tabSelected} />
            <PaletteIcon size={18} />
            Diseño
        </label>

        <label class="tab flex gap-1 items-center">
            <input type="radio" name="tabs" value="guests" bind:group={tabSelected} />
            <UsersIcon size={18} />
            Invitados
        </label>
    </div>

    <div>
        {#if tabSelected === 'info' }
            <TabInfo />
        {:else if tabSelected === 'design' }
            <TabDesign />
        {:else if tabSelected === 'guests' }
            <TabGuest />
        {/if}
    </div>

</aside>