<script>
    import NavItem from "./NavItem.svelte";
</script>

<header class="header container">
    <nav>
        <NavItem
            navTitle="Главная"
            navLink="/"
            navIconPath="/icons/ic_dashboard.svg"
        />
		<NavItem
			navTitle="Заказы"
			navLink="/orders"
			navIconPath="/icons/ic_orders.svg"
		/>
		<NavItem
			navTitle="Продукты"
			navLink="/products"
			navIconPath="/icons/ic_products.svg"
		/>
    </nav>
</header>

<style>
	nav {
		display: flex;
		gap: 40px;
	}
    header {
        padding-top: 48px;
        padding-bottom: 80px;
    }
</style>
