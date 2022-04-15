<script lang="ts">
	import { getAll, getCategory } from '../products';
	import ProductList from './ProductList.svelte';

	export let category;

	let items;
	if (category === 'all') {
		items = getAll();
	} else if (category) {
		items = getCategory(category);
	}
</script>

{#if category === 'all'}
	{#each Array.from(items.keys()) as key}
		{@const arr = Array.from(items.get(key))}
		<ProductList categoryName="{key}" items="{arr}" />
	{/each}
{:else if Array.isArray(items[0])}
	{#each items as arr, i}
		<ProductList categoryName="{category[i]}" items="{arr}" />
	{/each}
{:else}
	<ProductList categoryName="{category}" items="{items}" />
{/if}
