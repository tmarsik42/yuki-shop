<script lang="ts">
	import Gallery from '../../components/product/Gallery.svelte';
	import { getClothingCategories } from '../../components/products';

	let categories = getClothingCategories();
</script>

<style>
	.content {
		padding: 1rem;
	}
</style>

<div class="content">
	<Gallery category="{Array.from(categories.keys())}" />
</div>
