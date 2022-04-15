<script>
	import { cartContents } from '../../stores/cart';

	$: console.log($cartContents);
</script>

<ul>
	{#each $cartContents as item (item.id)}
		<li>
			{item.name}
			{item.quantity}x
		</li>
	{/each}
</ul>
