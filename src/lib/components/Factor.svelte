<script lang="ts">
	import Details from '$lib/components/Details.svelte';
	import type Factor from '$lib/risk/Factor.svelte';
	import { Select, Label } from 'flowbite-svelte';

	let { factor = $bindable() }: { factor: Factor } = $props();

	function renderFactorText(key: number, value: string) {
		return 0 === value.length ? key : `${key}: ${value}`;
	}
</script>

<div>
	<Label>
		{factor.name}
		<Details bind:entity={factor} smallIcon={true} />
		<Select class="mt-2" bind:value={factor.score} placeholder={'Choose an appropriate value'}>
			{#each factor.getSelectOptions() as { value, name }}
				<option {value}>
					{renderFactorText(value, name)}
				</option>
			{/each}
		</Select>
	</Label>
</div>

<style lang="scss">
	div {
		margin-top: 1rem;
	}
</style>
