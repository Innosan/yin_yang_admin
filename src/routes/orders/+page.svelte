<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Заказы</h1>

{#each data.orders as order}
	<div>
		<p>{order.id}</p>
	</div>
{/each}

