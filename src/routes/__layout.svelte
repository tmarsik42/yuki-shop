<script lang="ts">
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import HorizontalMenu from '../components/header/HorizontalMenu.svelte';
	import TopNav from '../components/header/TopNav.svelte';
	import Banner from '../components/header/Banner.svelte';
</script>

<svelte:head>
	<title>obchod</title>
</svelte:head>

<TopNav />
<Banner />
<HorizontalMenu />

<slot />
