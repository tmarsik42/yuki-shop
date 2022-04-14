<script lang="ts">
    import ProductItem from "./ProductItem.svelte";

    let skirts = [
        {name: "Skirt", url: ""},
        {name: "Skirt", url: ""},
        {name: "Skirt", url: ""},
        {name: "Skirt", url: ""},
        {name: "Skirt", url: ""},
        {name: "Skirt", url: ""},
        {name: "Skirt", url: ""},
        {name: "Skirt", url: ""},
        {name: "Skirt", url: ""},
        {name: "Skirt", url: ""},
        {name: "Skirt", url: ""},
        {name: "Skirt", url: ""},
    ]
</script>
<style>
    .product-list {
        width: 100%;
        display: grid;
        grid-gap: 1rem;
    }
    @media (min-width: 600px) {
        .product-list { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 900px) {
        .product-list { grid-template-columns: repeat(3, 1fr); }
    }
</style>

<h1>Skirts</h1>
<div class="product-list">
    {#each skirts as skirt}
        <ProductItem item="{skirt}" />
    {/each}
</div>