<script lang="ts">
    export let actionTitle, showModal;

	let dialog;
	$: if (dialog && showModal) dialog.showModal();
</script>

<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
    <p>{actionTitle}</p>
    <button>Да</button>
	<button autofocus on:click={() => dialog.close()}>Нет</button>
</dialog>

<style>
</style>
