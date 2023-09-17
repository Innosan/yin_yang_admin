import { supabase } from "$lib/supabaseClient";

export async function load() {
	const { data: productsData } = await supabase.from("product").select();

	return {
		products: productsData ?? [],
	};
}
