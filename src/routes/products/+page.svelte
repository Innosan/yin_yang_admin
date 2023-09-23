<script>
	import ProductCard from "../../components/containers/ProductCard.svelte";

	export let data;
</script>

<h1>Продукты</h1>

<div class="container small">
	{#each data.products as product}
		<ProductCard
			id={product.id}
			title="{product.title}"
			description="{product.description}"
			image="{product.image_url}"
			count="{product.count}"
			price="{product.price}"
			weight="{product.weight}"
			categoryId="{product.category_id}"
		/>
	{/each}
</div>

<style>
	div {
		padding: 0;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
