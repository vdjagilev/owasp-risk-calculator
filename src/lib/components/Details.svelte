<script lang="ts">
	import type IDescriptionable from '$lib/risk/IDescriptionable';
	import { Popover } from 'flowbite-svelte';
	import InfoIcon from './icons/InfoIcon.svelte';

	let {
		entity = $bindable(),
		smallIcon = false
	}: { entity: IDescriptionable; smallIcon?: boolean } = $props();

	let iconSize = $derived(smallIcon ? 20 : 25);
</script>

<span id="badge-{entity.getId()}" class="inline-flex">
	<InfoIcon height={iconSize} width={iconSize} />
	<Popover triggeredBy="#badge-{entity.getId()}" title="Description" class="w-64 text-sm">
		<div class="p-2">
			{entity.getDescription()}
		</div>
	</Popover>
</span>
