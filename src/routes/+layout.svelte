<script>
	import Footer from "$components/Footer.svelte";
    import "../app.css";

    let { children } = $props();
</script>

<div class="flex flex-col w-full min-h-dvh">
    <header class="bg-teal-400 shadow-sm px-8 h-12 flex items-center text-zinc-900">
        <h1 class="text-2xl font-medium">
            Invitation
        </h1>
    </header>

    <main class="px-8 py-4 flex-1 text-zinc-200">
		{@render children?.()}
	</main>
    
   <Footer />

</div>