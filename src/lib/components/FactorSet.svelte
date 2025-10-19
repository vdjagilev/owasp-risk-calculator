<script lang="ts">
	import type FactorSet from '$lib/risk/FactorSet.svelte';
	import Factor from './Factor.svelte';
	import Details from '$lib/components/Details.svelte';
	import FactorResult from '$lib/components/FactorResult.svelte';
	import { Heading } from 'flowbite-svelte';
	import Separator from './Separator.svelte';

	let { factorSet = $bindable() }: { factorSet: FactorSet } = $props();
</script>

<div>
	<div>
		<Heading tag="h3" customSize="text-2xl font-extrabold">
			{factorSet.name}
			<Details bind:entity={factorSet} />
		</Heading>
	</div>
	<Separator />
	<div>
		{#each factorSet.factors as factor, i}
			<Factor bind:factor={factorSet.factors[i]} />
		{/each}
	</div>
	<FactorResult bind:name={factorSet.name} bind:id={factorSet.id} bind:scoreSource={factorSet} />
</div>
