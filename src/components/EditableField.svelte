<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let
		fieldValue,
		fieldId,
		fieldLabel,
		fieldType,
		hasSuffix = false,
		suffixTitle = ""

	const dispatch = createEventDispatcher()
	let isFieldEdited = false;

	function handleFieldChange(event) {
		isFieldEdited = event.target.value.toString() !== fieldValue.toString()
		dispatch('edit', { fieldId, isFieldEdited, fieldData: event.target.value })
	}
</script>

<div>
	<label for={fieldId}>{fieldLabel}</label>
	<div>
		<input
			placeholder={fieldValue}
			type={fieldType}
			value={fieldValue}
			id={fieldId}
			name={fieldId}

			class:edited={isFieldEdited}
			on:input={handleFieldChange}
		>
		{#if hasSuffix}
			<p>{suffixTitle}</p>
		{/if}
	</div>
</div>

<style lang="scss">
	label {
		font-weight: 800;
	}
	input {
		font-size: 18px;
		font-weight: 600;
		color: #636363;
		border: none;

		border-radius: 7px;
		background: #E7E7E7;

		padding: 8px;

		&:focus {
			outline: 1px solid black;
			color: #4b4b4b;
		}
	}

	div {
		&:has(> label) {
			display: flex;
			flex-direction: column;
		}

		&:has(> input) {
			display: flex;
			align-items: center;
		}
	}

	.edited {
		outline: 2px solid green !important;
	}
</style>
