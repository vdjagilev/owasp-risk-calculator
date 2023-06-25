<script lang="ts">
	import type Risk from '$lib/risk/Risk';
	import { Heading, Button } from 'flowbite-svelte';
	import FactorSetComponent from './FactorSet.svelte';
	import FactorResult from './FactorResult.svelte';
	import RiskResult from './RiskResult.svelte';
	import { editRisk } from '$lib/risk/Store';
	import EditIcon from './EditIcon.svelte';
	import Radar from './charts/Radar.svelte';
	
	export let risk: Risk;
</script>

<div>
	<Heading tag="h2">
		Risk #{risk.id}: {risk.name}
		<Button color="none" size="xs" btnClass="xs p-0 m-0" on:click={() => editRisk.set(risk)}>
			<EditIcon />
		</Button>
	</Heading>
	<p><strong>Description:</strong></p>
	<p>{risk.description}</p>
	<div class="risk">
		<div class="grid grid-cols-4 gap-4">
			{#each risk.likelihoodFactorSets as factorSet}
				<FactorSetComponent bind:factorSet />
			{/each}
			{#each risk.impactFactorSets as factorSet}
				<FactorSetComponent bind:factorSet />
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
		<div class="container justify-center">
			<div class="w-1/2 mx-auto">
				<Radar bind:risk={risk} />
			</div>
		</div>
	</div>
</div>
