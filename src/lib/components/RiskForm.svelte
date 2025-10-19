<script lang="ts">
	import type Risk from '$lib/risk/Risk.svelte';
	import FactorSetComponent from './FactorSet.svelte';
	import FactorResult from './FactorResult.svelte';
	import RiskResult from './RiskResult.svelte';

	let { risk = $bindable() }: { risk: Risk } = $props();
</script>

<div class="grid grid-cols-4 gap-4">
	{#each risk.likelihoodFactorSets as factorSet, i}
		<FactorSetComponent bind:factorSet={risk.likelihoodFactorSets[i]} />
	{/each}
	{#each risk.impactFactorSets as factorSet, i}
		<FactorSetComponent bind:factorSet={risk.impactFactorSets[i]} />
	{/each}
</div>
<div class="grid grid-cols-2 gap-4">
	<FactorResult
		name="Likelihood Factor Sum"
		id="LF"
		precision={3}
		bind:scoreSource={risk.likelihoodScoreSource}
	/>
	<FactorResult
		name="Impact Factor Sum"
		id="IF"
		precision={3}
		bind:scoreSource={risk.impactScoreSource}
	/>
</div>
<div class="grid grid-cols-1 gap-4">
	<RiskResult bind:risk />
</div>
