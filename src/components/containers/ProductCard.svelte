<script lang="ts">
	import { supabase } from "$lib/supabaseClient";
	import Dialog from "../Dialog.svelte";

	export let id, title, description, image, count, price, weight, categoryId;

	let isContentEdited = false;
	let isDialogOpened = false;

	function handleTextareaChange(event, field) {
		isContentEdited = event.target.value !== field;
	}

	async function deleteProduct(productId) {
		const {data} = await supabase.from('product').delete().eq('id', productId)
	}
</script>

<div>
	<img src={image} alt="">
	<input type="text" value={title} on:input={handleTextareaChange(event, title)}>

	<input type="text" value={count} on:input={handleTextareaChange(event, count)}>
	<input type="text" value={price} on:input={handleTextareaChange(event, price)}>
	<input type="text" value={weight} on:input={handleTextareaChange(event, weight)}>
	<input type="text" value={categoryId} on:input={handleTextareaChange(event, categoryId)}>
	<input type="text" value={description} on:input={handleTextareaChange(event, description)}>

	<div>
		<button on:click={() => isDialogOpened = true}>Удалить</button>
		<button disabled={!isContentEdited}>Обновить</button>
	</div>

	<Dialog
		actionTitle="Удалить продукт?"
		dialogState={isDialogOpened}
		onClose={() => isDialogOpened = false}
		onAccept={() => {
			deleteProduct(id)
			isDialogOpened = false
		}}
	/>
</div>

<style>
	img {
		width: 50%;
	}

	div {
		border: 1px solid #ccc;
		padding: 10px;
		margin-bottom: 10px;
		border-radius: 12px;
	}
</style>
