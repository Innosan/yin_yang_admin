<script>
	import OrderField from "./OrderField.svelte";
	import { supabase } from "$lib/supabaseClient";
	import { formatDate } from "$lib/utils/dateFormatter";


    export let id, createdAt, user, orderItems, deliveryData, status

	async function changeStatus(orderId, statusId) {
		const { data } = await supabase
			.from("order")
			.update({status_id: statusId})
			.eq('id', orderId)
	}
</script>

<div class="container">
	<div>
		<button class:active={status.id === 1} on:click={changeStatus(id, 1)}>
			Новый
		</button>
		<button class:active={status.id === 6} on:click={changeStatus(id, 6)}>
			Готовится
		</button>
		<button class:active={status.id === 2} on:click={changeStatus(id, 2)}>
			Доставляется
		</button>
		<button class:active={status.id === 4} on:click={changeStatus(id, 4)}>
			Завершен
		</button>
	</div>
	<div class="order-details">
		<div>
			<p>Order #{id}</p>
			<p>Status {status.title}</p>

			<OrderField
				iconPath="/icons/ic_delivery_time.svg"
				fieldTitle="Время заказа"
				fieldContent={formatDate(createdAt)}
			/>
			<OrderField
				iconPath="/icons/ic_user_name.svg"
				fieldTitle="Заказчик"
				fieldContent={user.first_name + ' ' + user.last_name}
			/>
			<OrderField
				iconPath="/icons/ic_user_phone.svg"
				fieldTitle="Номер"
				fieldContent={user}
			/>
			<OrderField
				iconPath="/icons/ic_delivery_location.svg"
				fieldTitle="Адрес доставки"
				fieldContent={deliveryData.address}
			/>
		</div>
		<div>
			<p>Заказано</p>

			{#each orderItems as orderItem}
				<table>
					<tr>
						<td>
							<p>{orderItem.product_id.title}</p>
						</td>
						<td>
							<p>{orderItem.quantity} шт.</p>
						</td>
					</tr>
				</table>
			{/each}
		</div>
	</div>
	<p>{deliveryData.note}</p>
</div>

<style lang="scss">
	.container {
		padding: 30px 50px;
		flex-direction: column;

		border-radius: 20px;

		box-shadow: 0 0 10px 0 rgba(0,0,0,0.45);
		transition: .3s;

		&:hover {
			box-shadow: 0 0 10px 0 rgba(0,0,0,0.75);

		}
	}

	.order-details {
		display: flex;

	}

	.active {
		background-color: red;
	}
</style>
