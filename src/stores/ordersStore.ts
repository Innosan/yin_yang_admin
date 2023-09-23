import { writable } from 'svelte/store'
import { supabase } from "$lib/supabaseClient";

export const orders = writable([])
export const forDeliveryOrders = writable(0)
export const selfPickedOrders = writable(0)
export const deliveringOrders = writable(0)

let tableName = 'order'

const mySubscription = supabase
	.channel('orders-channel')
	.on(
		'postgres_changes',
		{ event: '*', schema: 'public', table: 'order' },
		payload => {
			loadOrders()
		})
	.subscribe()

export const loadOrders = async () => {
	const { data} = await supabase
		.from(tableName)
		.select('' +
			'*,' +
			' user_id ( first_name, last_name ),' +
			' order_item ( quantity, product_id ( * )),' +
			' status_id ( * )'
		)
		.order('created_at')

	orders.set(data)

	deliveringOrders.set(data.filter((order) => { return order.status_id.id === 2}).length)
	selfPickedOrders.set(data.filter((order) => { return order.status_id.id === 7}).length)
	forDeliveryOrders.set(data.filter((order) => { return order.status_id.id !== 7}).length)
}
