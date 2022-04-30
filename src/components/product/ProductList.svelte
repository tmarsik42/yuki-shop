<script lang="ts">
	import Item from './Item.svelte';

	export let categoryName: string;
	export let items: [];
</script>

<style>
	.product-list {
		width: 100%;
		display: grid;
		grid-gap: 1rem;
	}
	@media (min-width: 615px) {
		.product-list {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 900px) {
		.product-list {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>

{#if items?.length}
	<h1 style="text-transform: capitalize">
		{categoryName}
	</h1>
	<div class="product-list">
		{#each items ?? [] as item (item.id)}
			<Item item="{item}" />
		{/each}
	</div>
{/if}
