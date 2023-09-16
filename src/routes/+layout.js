import { supabase } from "$lib/supabaseClient";

export async function load() {
	const { data: ordersData } = await supabase.from("order").select();
	const { data: productsData } = await supabase.from("product").select();

	return {
		orders: ordersData ?? [],
		products: productsData ?? [],
	};
}
