import { writable, derived } from 'svelte/store';

export const cartContents = writable([]);

export const getTotalPrice = derived(cartContents, ($cartContents) => {
	let price = $cartContents.reduce((p, c) => p + c.price * c.quantity, 0);
	return price ?? 0;
});
