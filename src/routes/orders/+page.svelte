<script>
	import { orders } from "../../stores/ordersStore";
	import OrderCard from "../../components/containers/OrderCard.svelte";
</script>

<h1>Заказы</h1>

<div>
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
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
</style>
