<script>
	import { getMenuItems } from './menuItems';
</script>

<style>
	nav {
		display: flex;
		position: sticky;
		top: 0;
		margin: 0 auto;
		padding: 1rem 0 1.5rem 0;
		justify-content: center;
		align-items: center;
		background-color: white;
	}
	nav > a > div {
		padding: 0.625rem 0.75rem;
		margin: 0 0.25rem;
	}
	nav > a:hover {
		text-decoration: underline;
		cursor: pointer;
		border-radius: 24px;
	}
	nav > a {
		text-decoration: none;
		color: black;
	}
	nav span {
		vertical-align: middle;
	}
</style>

<nav>
	{#each getMenuItems() as menuItem (menuItem.id)}
		<a href="{menuItem.url}">
			<div>
				<span>{menuItem.name}</span>
				{#if menuItem.name === 'BLOG'}
					<i class="bi bi-box-arrow-up-right"></i>
				{/if}
			</div>
		</a>
	{/each}
</nav>
