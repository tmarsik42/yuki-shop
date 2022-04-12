<script lang="ts">
	import TopNav from './TopNav.svelte';
	import Banner from './Banner.svelte';
	import HorizontalMenu from './HorizontalMenu.svelte';
	import { headerHeightStore } from '../../stores/headerHeight';

	export let headerHeight;

	$: headerHeightStore.set(headerHeight);
</script>

<style>
	.header-lace {
		height: 2rem;
		width: 100vw;
		display: block;
		position: absolute;
		background-image: url("/krajkaborder.png");
		transform: rotate(180deg);
		background-size: contain;
		background-position: center bottom;
	}
</style>

<div class="header" bind:clientHeight="{headerHeight}">
	<TopNav />
	<Banner />
	<HorizontalMenu />
</div>
<div class="header-lace">&nbsp;</div>