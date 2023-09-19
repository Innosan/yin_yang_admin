import { writable } from 'svelte/store'
import { supabase } from "$lib/supabaseClient";

export const orders = writable([])
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
}
