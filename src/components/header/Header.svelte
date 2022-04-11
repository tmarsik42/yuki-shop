<script lang="ts">
	import TopNav from './TopNav.svelte';
	import Banner from './Banner.svelte';
	import HorizontalMenu from './HorizontalMenu.svelte';
	import { headerHeightStore } from '../../stores/headerHeight';

	export let headerHeight;

	$: headerHeightStore.set(headerHeight);
</script>

<div class="header" bind:clientHeight="{headerHeight}">
	<TopNav />
	<Banner />
	<HorizontalMenu />
</div>
