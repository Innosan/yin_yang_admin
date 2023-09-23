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

	import {fly} from "svelte/transition";


	import {
		loadOrders,
		orders,
	} from "../stores/ordersStore";

	import DeliveryHub from "../components/DeliveryHub.svelte";

    loadOrders()

	export let data
</script>

<main class="layout">
    <Header/>
	<PageContainer>
		<DeliveryHub
			ordersLength={$orders.length}
		/>
		{#key data.url}
			<div
				in:fly={{ x: -200, duration: 400, delay: 200 }}
				out:fly={{ x: 200, duration: 200,}}
			>
				<slot/>
			</div>
		{/key}
	</PageContainer>
</main>

<style>

</style>
