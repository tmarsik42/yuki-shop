<script lang="ts">
	import { getProduct } from '../../../components/products';
	import { page } from '$app/stores';
	import { Swipe, SwipeItem } from 'svelte-swipe';

	let item = getProduct($page.url.pathname.split('/')[2]);
	console.log(item);

	const swipeConfig = {
		autoplay: false,
		delay: 2000,
		showIndicators: true,
		transitionDuration: 1000,
		defaultIndex: 0
	};

	let swipeComp;

	function nextSlide() {
		swipeComp.nextItem();
	}

	function prevSlide() {
		swipeComp.prevItem();
	}
</script>

<style>
	.swipe-container {
		position: relative;
		height: 40vh;
		width: 100%;
	}
	img {
		max-width: 100%;
		height: auto;
	}

	.swipe-controls {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 50%;
		z-index: 99;
		font-size: 2em;
		width: 3rem;
		height: 3rem;
		cursor: pointer;
	}
	.swipe-controls:hover {
		background-color: rgba(255, 255, 255, 0.75);
		border-radius: 120px;
	}
	.swipe-controls.prev {
		left: 2rem;
	}
	.swipe-controls.next {
		right: 2rem;
	}

	.item-container {
		padding: 2rem;
	}

	.item {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.item-container > .description {
		padding: 1.5rem;
		border-radius: 8px;
		background-color: white;
		margin-bottom: 0;
	}

	.item > .info {
		margin: 0 1.5rem;
		border-radius: 8px;
		width: 35vw;
		background-color: white;
	}

	.price-stock {
		display: flex;
		justify-content: space-between;
	}
</style>

<div class="item-container">
	<div class="item">
		<div class="info">
			<h1>{item.name}</h1>

			<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum erat nulla, ullamcorper
				nec, rutrum non, nonummy ac, erat.
			</p>

			<div class="size">
				<label for="size">Size:</label>
				<select name="size" id="size">
					<option value="s">S</option>
					<option value="m">M</option>
					<option value="l">L</option>
					<option value="xl">XL</option>
				</select>
			</div>

			<div class="price-stock">
				<span style="color: mediumpurple;">{item.price}&nbsp;Kč</span>
				<!-- TODO items in stock-->
				<span style="font-weight: bold; color: green;">
					skladem&nbsp;
					<span style="font-weight: bold; color: black;">(3ks)</span>
				</span>
			</div>

			<div>
				<i class="bi bi-bag-plus"></i>
				&nbsp; Add to cart
			</div>
		</div>
		<div class="swipe-container">
			<Swipe {...swipeConfig} bind:this="{swipeComp}">
				<SwipeItem>
					<img src="{item.id}/full.jpeg" alt="{item.id}" />
				</SwipeItem>
				{#each Array(item.imgCount) as _, i}
					<SwipeItem>
						<img src="{item.id}/{i + 1}.jpeg" alt="{item.id}" />
					</SwipeItem>
				{/each}
			</Swipe>
			<div class="swipe-controls prev" on:click="{prevSlide}">
				{'<'}
			</div>
			<div class="swipe-controls next" on:click="{nextSlide}">
				{'>'}
			</div>
		</div>
	</div>
	<p class="description">
		Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum erat nulla, ullamcorper
		nec, rutrum non, nonummy ac, erat. Nulla accumsan, elit sit amet varius semper, nulla mauris
		mollis quam, tempor suscipit diam nulla vel leo. Maecenas libero. Aliquam ornare wisi eu metus.
		Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor.
	</p>
</div>
