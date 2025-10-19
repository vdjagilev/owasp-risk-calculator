<script lang="ts">
	import type Risk from '$lib/risk/Risk.svelte';
	import { RiskSeverity, getColor, getSeverityByLevels } from '$lib/risk/RiskSeverity';
	import { getLevelByScore } from '$lib/risk/Level';

	let { risk = $bindable() }: { risk: Risk } = $props();

	function riskSeverityClass(risk: Risk): string {
		return `${getColor(getRiskSeverity(risk))}`;
	}

	function getRiskSeverity(risk: Risk): RiskSeverity {
		return getSeverityByLevels(
			getLevelByScore(risk.likelihoodScoreSource.getFactor()),
			getLevelByScore(risk.impactScoreSource.getFactor())
		);
	}
</script>

<div class="risk-result rounded {riskSeverityClass(risk)}">
	{RiskSeverity[getRiskSeverity(risk)]}
</div>

<style>
	.risk-result {
		margin-top: 10px;
		padding: 10px;
		text-align: center;
		font-weight: bold;
	}
</style>
