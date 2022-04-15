<script lang="ts">
	import TopNav from './TopNav.svelte';
	import Banner from './Banner.svelte';
	import HorizontalMenu from './HorizontalMenu.svelte';
</script>

<style>
	header {
		padding: 0.5rem;
		background-color: white;
	}
	.header-lace {
		height: 2rem;
		width: 100vw;
		display: block;
		position: sticky;
		top: 4rem;
		background-image: url('/krajkaborder.png');
		transform: rotate(180deg);
		background-size: contain;
		background-position: center bottom;
	}
</style>

<header>
	<TopNav />
	<Banner />
</header>

<HorizontalMenu />

<div class="header-lace">&nbsp;</div>
