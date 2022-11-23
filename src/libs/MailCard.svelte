<script>
	// @ts-nocheck
	export let messages;
</script>

<main>
	<div class="flex flex-col gap-10">
		{#each messages as message}
			<div class="card w-96 bg-gray-700 shadow-xl">
				<div class="card-body">
					<h2 class="card-title">{message['subject']}</h2>
					<p>{message['intro']}</p>
					<div class="card-actions justify-end">
						<button class="btn btn-active btn-ghost">VIEW</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>
