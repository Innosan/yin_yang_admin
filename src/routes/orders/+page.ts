import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data: filters} = await supabase
        .from("status")
        .select()
        .order('id', {ascending: false})
    ;

    return {
        filters: filters ?? []
    }
}
