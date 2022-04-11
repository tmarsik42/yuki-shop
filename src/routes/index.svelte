<script lang="ts">
	import { headerHeightStore } from '../stores/headerHeight';
</script>

<style>
	.content {
		min-height: calc(100vh - var(--headerHeight));
		background: repeating-linear-gradient(
			to right,
			rgba(224, 183, 229, 0.3),
			rgba(224, 183, 229, 0.3) 7.5%,
			white 7.5%,
			white 15%
		);
	}
</style>

<div class="content" style="--headerHeight: {$headerHeightStore}px">&nbsp;</div>
