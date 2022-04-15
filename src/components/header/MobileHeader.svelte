<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { getMenuItems } from './menuItems';
	import { goto } from '$app/navigation';

	let open = false;
</script>

<style>
	header {
		padding: 0.5rem 0.5rem 0;
		background-color: white;
		height: 5rem;
		display: flex;
		justify-content: space-between;
		z-index: 100;
	}
	.header-lace {
		height: 1.25rem;
		width: 100vw;
		background-image: url('/krajkaborder.png');
		transform: rotate(180deg);
		background-size: contain;
		background-position: center bottom;
		z-index: 100;
	}
	.menu-overlay {
		position: absolute;
		top: 5rem;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: white;
		z-index: 50;
		padding-top: 1.5rem;
	}
	.mobile-menu {
		text-align: center;
		font-size: 1.5em;
		padding: 0 1em 1em;
	}
	p {
		cursor: pointer;
		width: max-content;
		margin: 1.5rem auto;
		font-size: 0.9em;
	}
	p:hover {
		text-decoration: underline;
	}
	.bar {
		border-style: solid;
		border-color: rgba(224, 183, 229, 0.75);
		border-width: 1px;
		height: 0;
	}
</style>

<header>
	<div class="banner">
		<a href="/" style="text-decoration: none;">
			<img src="/banner.png" alt="header logo" style="height: 100%;" />
		</a>
	</div>
	<div style="display: flex; align-items: center;">
		<Hamburger bind:open />
	</div>
</header>

<div class="header-lace">&nbsp;</div>

{#if open}
	<div class="menu-overlay">
		<div class="mobile-menu">
			{#each getMenuItems() as menuItem, i (menuItem.id)}
				<p
					in:fly="{{ y: -15, delay: 50 * i }}"
					on:click="{() => {
						goto(menuItem.url);
						open = false;
					}}"
				>
					{menuItem.name}
				</p>
			{/each}
		</div>

		<div class="bar" in:scale="{{ duration: 750, delay: 100, easing: quadOut, opacity: 1 }}"></div>
	</div>
{/if}
