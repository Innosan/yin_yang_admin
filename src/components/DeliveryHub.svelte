<script lang="ts">
import {page} from "$app/stores";

import {
	deliveringOrders,
	forDeliveryOrders,
	selfPickedOrders
} from "../stores/ordersStore";
import { filter } from "../stores/filterStore.js";

import SocialNavItem from "./SocialNavItem.svelte";

export let ordersLength
</script>

<div class="left-menu" class:disable={$page.url.pathname === "/products"}>
	<div class="current-orders container small">
		<div>
			<img src="/icons/ic_info.svg" alt="Info icon">
			<p>В работе {ordersLength} заказ!</p>
		</div>
		<div>
			<a href="/orders">
				<button on:click={() => filter.set(7)}>
					{$selfPickedOrders} самовывоз
				</button>
			</a>
			<a href="/orders">
				<button on:click={() => filter.set(1)}>
					{$forDeliveryOrders} доставка
				</button>
			</a>
		</div>
	</div>
	<div class="delivering">
		<img src="/icons/ic_delivery.svg" alt="Delivery icon">
		<p>Доставляется {$deliveringOrders} заказ</p>
	</div>
	<div>
		<SocialNavItem
			url="https://web.telegram.org/k/"
			iconPath="/icons/ic_telegram.svg"
			title="Telegram"
		/>
		<SocialNavItem
			url="https://web.telegram.org/k/"
			iconPath="/icons/ic_kassa.svg"
			title="Yu Kassa"
		/>
	</div>
</div>

<style lang="scss">
	.left-menu {
		height: min-content;
		min-width: 364px;
		position: sticky;
		top: 120px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.current-orders {
		border-radius: 15px;
		background: #E44857;
	}

	.delivering {
		border-radius: 15px;
		background: #E44857;
		opacity: .8;
		padding: 16px;

		transition: .2s;
		&:hover {
			opacity: 1;
		}
	}

	.disable {
		display: none;
	}

	div:has(> img) {
		display: flex;
		align-items: center;
		color: #FFF;

		gap: 12px;

		p {
			font-size: 22px;
			font-weight: 900;
		}
	}

	div:has(button) {
		button {
			padding: 10px 20px;
			color: #FFF;
			border-radius: 8px;
			font-weight: 700;
			font-size: 18px;
			background: rgba(255, 255, 255, 0.20);

			transition: .2s;
			&:hover {
				background: rgba(255, 255, 255, 0.40);
			}
		}
	}
</style>
