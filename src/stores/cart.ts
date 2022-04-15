import { writable, derived } from 'svelte/store';

export const cartContents = writable([]);

export const getTotalPrice = derived(cartContents, ($cartContents) => {
	let price = 0;
	$cartContents.forEach((e) => (price = price + e.price));
	return price;
});
