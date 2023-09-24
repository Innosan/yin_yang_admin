<script>
	import {products} from "../../stores/productsStore";

	import ProductCard from "../../components/containers/ProductCard.svelte";
</script>

<h1>Продукты</h1>

<div class="container small">
	{#each $products as product}
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
