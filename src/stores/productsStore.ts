import { supabase } from "../lib/supabaseClient";
import { writable } from "svelte/store";
import { toast } from '@zerodevx/svelte-toast'

export const products = writable([])
let tableName = 'product'

export const loadProducts = async () => {
	const { data} = await supabase
		.from(tableName)
		.select()
		.order('id')

	products.set(data)
}

export const updateProduct = async (id: number, fieldToUpdate: object) => {
	const { data } = await supabase
		.from(tableName)
		.update(fieldToUpdate)
		.eq('id', id)

	await loadProducts();

	toast.push(`Продукт №${id} обновлён!`)
}
