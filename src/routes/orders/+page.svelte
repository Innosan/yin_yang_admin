<script>
	import { orders } from "../../stores/ordersStore";
	import OrderCard from "../../components/containers/OrderCard.svelte";

	export let data;

	let selectedFilter = data.filters[0].id
</script>

<h1>Заказы</h1>

<div>
	<select bind:value={selectedFilter}>
		{#each data.filters as option (option.id)}
			<option value={option.id}>{option.title}</option>
		{/each}
	</select>
</div>

<div>
	{#if selectedFilter === 8}
		{#each $orders as order}
			<OrderCard
				id={order.id}
				status={{title: order.status_id.title, id: order.status_id.id}}
				createdAt={order.created_at}
				user={order.user_id}
				orderItems={order.order_item}
				deliveryData={{note: order.delivery_note, address: order.delivery_address}}
			/>
		{/each}
	{:else}
	{#each $orders.filter(order => { return order.status_id.id === selectedFilter }) as order}
		<OrderCard
				id={order.id}
				status={{title: order.status_id.title, id: order.status_id.id}}
				createdAt={order.created_at}
				user={order.user_id}
				orderItems={order.order_item}
				deliveryData={{note: order.delivery_note, address: order.delivery_address}}
		/>
	{/each}
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
</style>
