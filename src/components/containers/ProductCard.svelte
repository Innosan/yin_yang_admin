<script lang="ts">
	import { supabase } from "$lib/supabaseClient";
	import Dialog from "../Dialog.svelte";
	import EditableField from "../EditableField.svelte";

	export let id, title, description, image, count, price, weight, categoryId;

	let isDialogOpened = false;
	let isAnyFieldEdited = false
	let editedFields = {};

	async function deleteProduct(productId) {
		const { data } = await supabase.from('product').delete().eq('id', productId)
	}

	function handleEdit(event) {
		const { fieldId, isFieldEdited } = event.detail;

		editedFields[fieldId] = isFieldEdited;
		isAnyFieldEdited = Object.values(editedFields).some(edited => edited);
	}
</script>

<div>
	<img src={image} alt="">

	<form action="get">
		<EditableField
			fieldValue={title}
			fieldId="title"
			fieldLabel="Название"
			fieldType="text"
			on:edit={handleEdit}
		/>
		<EditableField
			fieldValue={count}
			fieldId="count"
			fieldLabel="Кол-во"
			fieldType="text"
			hasSuffix={true}
			suffixTitle="шт."
			on:edit={handleEdit}
		/>
		<EditableField
			fieldValue={price}
			fieldId="price"
			fieldLabel="Цена"
			fieldType="text"
			hasSuffix={true}
			suffixTitle="₽"
			on:edit={handleEdit}
		/>
		<EditableField
			fieldValue={weight}
			fieldId="weight"
			fieldLabel="Вес"
			fieldType="text"
			hasSuffix={true}
			suffixTitle="гр."
			on:edit={handleEdit}
		/>
		<EditableField
			fieldValue={categoryId}
			fieldId="category"
			fieldLabel="Категория"
			fieldType="text"
			on:edit={handleEdit}
		/>
		<EditableField
			fieldValue={description}
			fieldId="description"
			fieldLabel="Опиание"
			fieldType="text"
			on:edit={handleEdit}
		/>
	</form>

	<div>
		<button on:click={() => isDialogOpened = true}>Удалить</button>
		<button disabled={!isAnyFieldEdited}>Обновить</button>
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

<style lang="scss">
	img {
		width: 50%;
	}

	div {
		border: 1px solid #ccc;
		padding: 10px;
		margin-bottom: 10px;
		border-radius: 12px;

		&:has(img) {
			display: flex;
			flex-direction: column;

			width: 320px;
			gap: 20px;
		}
	}
</style>
