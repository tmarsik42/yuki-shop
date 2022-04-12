<script lang="ts">
	import { headerHeightStore } from '../stores/headerHeight';
</script>

<style>
	.content {
		min-height: 200vh;
	}
</style>

<div class="content" style="--headerHeight: {$headerHeightStore}px">&nbsp;</div>
