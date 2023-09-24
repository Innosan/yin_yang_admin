<script>
    /*
    CSS
     */
    import '../app.css'
    import '../styles/global.css'
    import '../styles/font.css'
    import '../styles/toast.css'

    /*
    Components
     */
    import PageContainer from "../components/PageContainer.svelte";
    import Header from "../components/Header/Header.svelte";
	import DeliveryHub from "../components/DeliveryHub.svelte";

	import {fly} from "svelte/transition";

	import { loadOrders, orders } from "../stores/ordersStore";
	import { loadProducts } from "../stores/productsStore";
	import {SvelteToast} from "@zerodevx/svelte-toast";

    loadOrders()
    loadProducts()

	export let data

	const options = {
		reversed: true,
		intro: { y: 192 }
	}
</script>

<main class="layout">
    <Header/>
	<PageContainer>
		<DeliveryHub
			ordersLength={$orders.length}
		/>
		{#key data.url}
			<div
				in:fly={{ x: 50, duration: 400, delay: 200 }}
				out:fly={{ x: -50, duration: 200,}}
				class="container small"
			>
				<slot/>
			</div>
		{/key}
	</PageContainer>
</main>

<SvelteToast {options} />

<style>
	.small {
		padding: 0;
	}
</style>
