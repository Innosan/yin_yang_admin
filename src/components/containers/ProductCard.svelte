<script lang="ts">
	import { supabase } from "$lib/supabaseClient";

	import { updateProduct } from "../../stores/productsStore";

	import Dialog from "../Dialog.svelte";
	import EditableField from "../EditableField.svelte";

	let showModal = false;
	let isAnyFieldEdited = false
	let editedFields = {};
	let editedFieldsData = {};

	function handleEdit(event) {
		const { fieldId, isFieldEdited, fieldData } = event.detail;

		editedFields[fieldId] = isFieldEdited;
		editedFieldsData[fieldId] = fieldData

		isAnyFieldEdited = Object.values(editedFields).some(edited => edited);
	}

	export let id, title, description, image, count, price, weight, categoryId;
</script>

<div>
	<img src={image} alt="">

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
		fieldId="category_id"
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

	<div>
		<button on:click={() => (showModal = true)}>Удалить</button>
		<button
			on:click={() => {
				updateProduct(id, editedFieldsData);
				isAnyFieldEdited = false
			}}
			disabled={!isAnyFieldEdited}>
			Обновить
		</button>

		<Dialog
			actionTitle={"Удалить продукт " + title}
			bind:showModal
		/>
	</div>
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
