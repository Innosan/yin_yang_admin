<script lang="ts">
	export let title, description, image, count, price, weight, categoryId;


	let isContentEdited = false;

	function handleTextareaChange(event, field) {
		console.log(event.target.value, field);
		isContentEdited = event.target.value !== field;
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
		<button on:click={() => console.log("delete")}>Удалить</button>
		<button disabled={!isContentEdited}>Обновить</button>
	</div>
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
	p {
		margin: 0;
	}
</style>
