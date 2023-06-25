<script lang="ts">
	import type FactorSet from '$lib/risk/FactorSet';
	import Factor from './Factor.svelte';
	import Details from '$lib/components/Details.svelte';
	import FactorResult from '$lib/components/FactorResult.svelte';
	import { Heading } from 'flowbite-svelte';
	import Separator from './Separator.svelte';

	export let factorSet: FactorSet;
</script>

<div>
	<div>
		<Heading tag="h3">
			{factorSet.name}
			<Details bind:entity={factorSet} />
		</Heading>
	</div>
	<Separator />
	<div>
		{#each factorSet.factors as factor}
			<Factor bind:factor />
		{/each}
	</div>
	<FactorResult bind:name={factorSet.name} bind:id={factorSet.id} bind:scoreSource={factorSet} />
</div>
