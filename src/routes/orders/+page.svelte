<script>
	import { orders } from "../../stores/ordersStore";
	import { filter } from "../../stores/filterStore";
	import OrderCard from "../../components/containers/OrderCard.svelte";
	import Select from "../../components/Select.svelte";

	export let data;

	export function handleFilterChange(event) {
		filter.set(event.detail.filterId)
	}
</script>

<h1>Заказы</h1>

<div>
	<Select
		filters={data.filters}
		on:filter={handleFilterChange}
	/>
</div>

<div>
	{#if $filter === 8}
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
	{#each $orders.filter(order => { return order.status_id.id === $filter }) as order}
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
