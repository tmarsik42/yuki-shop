<script>
	import { cartContents } from '../../stores/cart';

	let qty = 0;

	$: if ($cartContents?.length) {
		qty = $cartContents.reduce((p, c) => p + c.quantity, 0);
	}
</script>

<style>
	.top-nav {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
	a {
		text-decoration: none;
		color: black;
	}
</style>

<div class="top-nav">
	<div>
		<span style="font-size: 0.8em;">
			<i class="bi bi-envelope"></i>
			sleepingdollyuki@gmail.com
		</span>
	</div>
	<div>
		<a href="/order/cart">
			<i class="bi bi-bag-heart" style="font-size: 1.5em;"></i>
			{qty}
		</a>
	</div>
</div>
