<script lang="ts">
	import { cartContents } from '../../stores/cart';
	import { onDestroy } from 'svelte';

	export let item;

	//qty variable for subscribe method
	let qty = 0;
	//add qty to item
	item = { ...item, quantity: qty };

	function changeQty(item, delta) {
		let itemIndex = $cartContents.findIndex((c) => c.id === item.id);

		// add item not in cart
		if (itemIndex === -1 && delta > 0) {
			cartContents.update((c) => [...c, { ...item, quantity: 1 }]);
			// remove item from cart when qty reaches zero
		} else if (itemIndex !== -1 && delta < 0 && $cartContents[itemIndex].quantity === 0) {
			cartContents.set($cartContents.filter((c) => c.id !== item.id));
			// add or subtract qty of item in cart
		} else if (itemIndex !== -1 && delta) {
			$cartContents[itemIndex].quantity = $cartContents[itemIndex].quantity + delta;
		}
	}

	const unsubscribe = cartContents.subscribe(
		(contents) => (qty = contents.filter((c) => c.id === item.id).map((v) => v.quantity)[0] ?? 0)
	);

	onDestroy(unsubscribe);
</script>

<style>
	.item-container {
		border: 1px solid black;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		background-color: white;
		padding: 0.75rem;
	}
	.image-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.item-image {
		width: 60%;
	}
	.item-image > img {
		width: 100%;
		object-fit: cover;
	}
	.item-name {
		width: 100%;
		margin-left: 0.25rem;
		margin-top: 0.25rem;
	}
	.item-name > span {
		font-size: 1.2em;
		font-weight: bold;
	}
	.item-name > span:hover {
		text-decoration: underline;
	}

	.item-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 1rem;
		height: 20%;
	}
	.item-plus-minus {
		font-size: 1.25em;
		cursor: pointer;
	}
	a {
		text-decoration: none;
		color: black;
	}
</style>

<div class="item-container">
	<div class="image-container">
		<a href="{item.category}/{item.id}" class="item-image">
			<img src="{item.category}/{item.id}/full.jpeg" alt="{item.name}" />
		</a>
	</div>
	<div class="item-info">
		<a href="{item.category}/{item.id}">
			<div class="item-name">
				<span>{item.name}</span>
			</div>
		</a>
		<div class="item-plus-minus">
			<span on:click="{() => changeQty(item, -1)}" title="odebrat z košíku ☹️">
				<i class="bi bi-bag-dash"></i>
			</span>
			<span style="font-size: 0.75em;">
				{qty}
			</span>
			<span on:click="{() => changeQty(item, 1)}" title="přidat do košíku 🙂">
				<i class="bi bi-bag-plus"></i>
			</span>
		</div>
	</div>
</div>
