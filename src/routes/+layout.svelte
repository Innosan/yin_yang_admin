<script>
    /*
    CSS
     */
    import '../app.css'
    import '../styles/global.css'
    import '../styles/font.css'

    /*
    Components
     */
    import PageContainer from "../components/PageContainer.svelte";
    import Header from "../components/Header/Header.svelte";
	import SocialNavItem from "../components/SocialNavItem.svelte";

    import { loadOrders, orders } from "../stores/ordersStore";

    loadOrders()
</script>

<main class="layout">
    <Header/>
	<PageContainer>
		<div class="left-menu">
			<div class="current-orders">
				<div>
					<img src="/icons/ic_info.svg" alt="Info icon">
					<p>В работе 3 заказа!</p>
				</div>
				<div>
					<p>1 на самовывоз</p>
					<p>2 на доставку</p>
				</div>
			</div>
			<div class="delivering">
				<img src="/icons/ic_delivery.svg" alt="Delivery icon">
				<p>Доставляется 1 заказ</p>
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
		<div>
			<slot/>
		</div>
	</PageContainer>
</main>

<style>
	.left-menu {
		height: min-content;
		min-width: 364px;
		position: sticky;
		top: 120px;
	}

	.current-orders {
		border-radius: 15px;
		background: #E44857;
	}

	.delivering {
		border-radius: 15px;
		background: #E44857;
	}
</style>
