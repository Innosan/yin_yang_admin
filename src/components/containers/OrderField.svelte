<script>
    export let iconPath, fieldTitle, fieldContent
</script>

<div>
    <img src={iconPath} alt={fieldTitle}>
    <p>{fieldContent}</p>
</div>

<style>
    div {
        display: flex;
        gap: 12px;

        opacity: .8;
    }
</style>
