<script>
	import ProductCard from "../../components/containers/ProductCard.svelte";

	export let data;
</script>

<h1>Продукты</h1>

{#each data.products as product}
	<ProductCard
		image="{product.image_url}"
		title="{product.title}"
		description="{product.description}"
		price="{product.price}"
		weight="{product.weight}"
		count="{product.count}"
		categoryId="{product.category_id}"
	/>
{/each}
