<script>
	export let data;
</script>

<h1>Продукты</h1>

{#each data.products as product}
	<div class="{product.id}">
		<p contenteditable="true">{product.title}</p>
	</div>
{/each}
