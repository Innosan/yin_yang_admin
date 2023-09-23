<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { filter } from "../stores/filterStore";

	const dispatch = createEventDispatcher();
	export let filters

	function setFilter() {
		dispatch('filter', {
			filterId: $filter
		})
	}
</script>

<div>
	<select bind:value={$filter} on:change={setFilter}>
		{#each filters as option (option.id)}
			<option value={option.id}>{option.title}</option>
		{/each}
	</select>
</div>

<style lang="scss">
	select {
		border-radius: 12px;
		background: #E44857;
		color: #FFF;
		font-size: 20px;
		font-weight: 900;
		padding: 14px;

		opacity: .8;

		transition: .2s;
		&:hover {
		    opacity: 1;
		}
	}
</style>
