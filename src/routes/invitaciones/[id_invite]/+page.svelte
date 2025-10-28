<script>
	let { data } = $props();
	const { invite, guest, auth } = data;

	let respuesta = $state(guest?.status || 'unconfirmed');
	let sending = $state(false);
	let errorMsg = $state('');

	async function sendResponse(choice) {
		sending = true;
		errorMsg = '';

		const res = await fetch('/api/send-response', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id_invite: invite.id, id_guest: guest.token, choice })
		});

		const { error, success } = await res.json();

		if (success) {
			errorMsg = error;
		} else {
			respuesta = choice;
			sending = false;
		}
	}
</script>

{#if auth}
	<section class="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-slate-100" >
		<div
			class="w-full max-w-xl space-y-6 rounded-2xl border border-slate-700/60 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-xl"
		>
			<header class="space-y-2 text-center">
				<p class="text-sm tracking-wide text-slate-400 uppercase">
					Invitación personal para {guest?.name ?? 'Invitado(a)'}
				</p>

				<h1 class="text-2xl leading-tight font-semibold text-slate-50">
					Has recibido una invitación para
					<span class="block text-3xl font-bold text-indigo-400">{invite?.name}</span>
				</h1>
			</header>

			<div
				class="space-y-4 rounded-xl border border-slate-700 bg-slate-800/60 p-4 text-sm leading-relaxed"
			>
				{#if invite?.description}
					<p class="text-slate-200">{invite.description}</p>
				{/if}

				<div class="flex items-start gap-3 text-slate-300">
					<svg
						class="h-5 w-5 shrink-0 text-slate-400"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
						<line x1="16" y1="2" x2="16" y2="6" />
						<line x1="8" y1="2" x2="8" y2="6" />
						<line x1="3" y1="10" x2="21" y2="10" />
					</svg>

					<div>
						<div class="text-[0.7rem] tracking-wide text-slate-400 uppercase">Fecha</div>
						<div class="text-base text-slate-100">{invite?.date}</div>
					</div>
				</div>

				<div class="flex items-start gap-3 text-slate-300">
					<svg
						class="h-5 w-5 shrink-0 text-slate-400"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="12" r="10" />
						<polyline points="12 6 12 12 16 14" />
					</svg>

					<div>
						<div class="text-[0.7rem] tracking-wide text-slate-400 uppercase">Hora</div>
						<div class="text-base text-slate-100">{invite?.time}</div>
					</div>
				</div>

				<div class="flex items-start gap-3 text-slate-300">
					<svg
						class="h-5 w-5 shrink-0 text-slate-400"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z" />
						<circle cx="12" cy="10" r="3" />
					</svg>
					{invite?.location || 'Sin locación'}
				</div>
			</div>

			{#if guest.status === "unconfirmed" }
                <div class="space-y-1 text-center">
                    <p class="text-sm font-medium text-slate-300">¿Asistirás?</p>
                    <p class="text-xs text-slate-500">Confirma o rechaza tu asistencia.</p>
                </div>

                <div class="flex flex-col justify-center gap-4 sm:flex-row">
                    <button
                        class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3
                    font-medium text-white shadow-lg
                    shadow-emerald-900/30 hover:bg-emerald-500 active:bg-emerald-700
                    disabled:cursor-not-allowed disabled:opacity-40"
                        disabled={sending}
                        onclick={() => sendResponse('accepted')}
                    >
                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>Sí, voy</span>
                    </button>

                    <button
                        class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-rose-600 px-4 py-3
                    font-medium text-white shadow-lg
                    shadow-rose-900/30 hover:bg-rose-500 active:bg-rose-700
                    disabled:cursor-not-allowed disabled:opacity-40"
                        disabled={sending}
                        onclick={() => sendResponse('rejected')}
                    >
                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        <span>No puedo</span>
                    </button>
                </div>
            {/if}

			<footer class="space-y-2 text-center text-sm">
				<div class="text-slate-400">
					Estado actual:
					{#if respuesta === 'accepted'}
						<span class="font-semibold text-emerald-400">Confirmado</span>
					{:else if respuesta === 'rejected'}
						<span class="font-semibold text-rose-400">No asistirá</span>
					{:else}
						<span class="font-semibold text-yellow-400">Sin confirmar</span>
					{/if}
				</div>

				{#if errorMsg}
					<div class="text-xs text-rose-400">{errorMsg}</div>
				{/if}

				<div class="text-[0.7rem] leading-relaxed text-slate-500">
					Esta respuesta también se usa para enviar notificación por correo al organizador.
				</div>
			</footer>
		</div>
	</section>
{:else}
	<section class="flex min-h-screen items-center justify-center bg-slate-900 p-6 text-slate-200">
		<div
			class="w-full max-w-md space-y-4 rounded-2xl border border-slate-700/60 bg-slate-900/60 p-8 text-center shadow-xl backdrop-blur-xl"
		>
			<h1 class="text-xl font-semibold text-slate-100">Invitación no válida</h1>
			<p class="text-sm leading-relaxed text-slate-400">
				Este enlace ya fue usado, expiró o no pertenece a tu invitación.
			</p>
		</div>
	</section>
{/if}
