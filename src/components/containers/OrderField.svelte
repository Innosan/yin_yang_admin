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
        align-items: center;

        opacity: .6;
    }

    p {
        font-size: 22px;
        font-weight: 700;
    }
</style>
