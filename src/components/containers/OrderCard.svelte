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
	<div class="status-container">
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
			<p class="order-block-title">Заказ #{id}</p>

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
			<p class="order-block-title">Заказано</p>

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
	<div class="order-note">
		<img src="/icons/ic_note.svg" alt="">
		<p>{deliveryData.note}</p>
	</div>
</div>

<style lang="scss">
	.container {
		padding: 30px 50px;
		flex-direction: column;

		gap: 40px;

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
		background-color: #E44857 !important;
		opacity: 1 !important;
	}

	.status-container {
		border-radius: 14px;
		background: rgba(0, 0, 0, 0.80);

		button {
			padding: 12px 30px;
			color: #FFF;

			font-size: 18px;
			font-weight: 900;

			opacity: .7;

			transition: .3s;

			&:hover {
				opacity: 1;
			}
		}
	}

	.order-block-title {
		font-size: 34px;
		font-weight: 900;
	}

	.order-note {
		display: flex;
		gap: 12px;
		border-radius: 16px;
		background: #333;
		padding: 16px;
		align-items: center;
		color: #FFF;
		font-size: 18px;
		font-weight: 900;
	}
</style>
