<script>
	import { loadOrders, orders } from "../../stores/ordersStore.ts";
	import OrderCard from "../../components/containers/OrderCard.svelte";

	loadOrders()
</script>

<h1>Заказы</h1>


{#each $orders as order}
	<OrderCard
		id={order.id}
		createdAt={order.created_at}
		user={order.user_id}
		orderItems={order.order_item}
	/>
{/each}

