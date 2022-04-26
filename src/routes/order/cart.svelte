<script lang="ts">
	import CartItems from '../../components/order/CartItems.svelte';
	import { cartContents, getTotalPrice } from '../../stores/cart';

	let customerName;
	let customerMail;
	let customerPhone;
	let customerMessage;

	async function send() {
		const webhookBody = {
			embeds: [
				{
					title: `Nová objednávka od ${customerName}`,
					description: `E-mail: ${customerMail}\n
                                  Telefonní číslo: ${customerPhone}\n
                                  Zpráva: ${customerMessage}`,
					color: 5832603
				},
				{
					title: 'Shrnutí objednávky',
					color: 5814783,
					fields: $cartContents.map((item) => ({
						name: item.name,
						value: `Odkaz: ${item.id}\n
                                  Počet kusů: ${item.quantity}\n
                                  Cena za ks: ${item.price}\n`
					})),
					footer: {
						text: `Cena celkem: ${$getTotalPrice}`
					}
				}
			]
		};

		const response = await fetch(import.meta.env.VITE_DISCORD_WEBHOOK_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(webhookBody)
		});

		if (response.ok) {
			console.log('I have received your message!');
		} else {
			console.error('There was an error! Try again later!');
		}
	}
</script>

<style>
	label {
		font-size: 0.75rem;
		font-weight: 400;
		letter-spacing: 0.32px;
		display: inline-block;
		margin-bottom: 0.2rem;
		color: #525252;
		line-height: 1rem;
		vertical-align: baseline;
	}
</style>

<CartItems />
<div style="display: flex; flex-direction: column;">
	<div style="display: flex;">
		<div style="display: flex; flex-direction: column">
			<label for="name">Name</label>
			<input id="name" type="text" bind:value="{customerName}" />
		</div>
		<div style="display: flex; flex-direction: column">
			<label for="mail">E-mail</label>
			<input id="mail" type="email" bind:value="{customerMail}" />
		</div>
		<div style="display: flex; flex-direction: column">
			<label for="phone">Phone number</label>
			<input id="phone" type="tel" bind:value="{customerPhone}" />
		</div>
	</div>
	<br />
	<label for="message">Message</label>
	<textarea
		id="message"
		bind:value="{customerMessage}"
		placeholder="You can type some message or another form contact."></textarea>
	<br />
	<br />
	<button on:click="{send}">send</button>
</div>
