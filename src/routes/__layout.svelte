<script lang="ts">
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import Header from '../components/header/Header.svelte';
	import MobileHeader from '../components/header/MobileHeader.svelte';
	import MediaQuery from './MediaQuery.svelte';
</script>

<svelte:head>
	<title>obchod</title>
</svelte:head>

<MediaQuery query="(min-width: 615px)" let:matches>
	{#if matches}
		<Header />
	{:else}
		<MobileHeader />
	{/if}
</MediaQuery>

<main>
	<slot />
</main>
