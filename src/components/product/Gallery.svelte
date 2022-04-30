<script lang="ts">
	import { getCategory } from '../products';
	import ProductList from './ProductList.svelte';

	export let category;

	let items = new Map();
	if (Array.isArray(category)) {
		category.forEach((c) => items.set(c, getCategory(c)));
	} else {
		items.set(category, getCategory(category));
	}
</script>

{#each [...items] as [category, item]}
	<ProductList categoryName="{category}" items="{item}" />
{/each}
