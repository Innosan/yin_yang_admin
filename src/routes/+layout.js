import { supabase } from "$lib/supabaseClient";

export async function load({ url }) {
	const { data: productsData } = await supabase.from("product").select();

	return {
		products: productsData ?? [],
		url: url.pathname
	};
}
