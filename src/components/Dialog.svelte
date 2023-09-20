<script lang="ts">
    export let actionTitle: string, dialogState: boolean, onClose, onAccept
</script>

<dialog open={dialogState}>
    <p>{actionTitle}</p>
    <button on:click={onAccept}>Да</button>
    <button on:click={onClose}>Нет</button>
</dialog>

<style>
</style>
