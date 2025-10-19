<script lang="ts">
	import type IScoreSource from '$lib/risk/IScoreSource';
	import { Level, getColor, getLevelByScore } from '$lib/risk/Level';

	let {
		name = $bindable(),
		id = $bindable(),
		scoreSource = $bindable(),
		precision = 2
	}: { name: string; id: string; scoreSource: IScoreSource; precision?: number } = $props();

	function renderFactorNumber(factorScrore: number): string {
		return factorScrore.toFixed(precision);
	}

	function getFactorLevel(factorScore: number): string {
		return Level[getLevelByScore(factorScore)];
	}

	function getFactorLevelColor(factorScore: number): string {
		return getColor(getLevelByScore(factorScore));
	}

	function getFactorLevelClass(scoreSource: IScoreSource): string {
		return ` ${getFactorLevelColor(scoreSource.getFactor())}`;
	}

	function getFactorLevelString(scoreSource: IScoreSource): string {
		return `${name}: ${getFactorLevel(scoreSource.getFactor())} (${id}: ${renderFactorNumber(
			scoreSource.getFactor()
		)})`;
	}
</script>

<div class="factor-result rounded{getFactorLevelClass(scoreSource)}">
	{getFactorLevelString(scoreSource)}
</div>

<style lang="scss">
	.factor-result {
		margin-top: 10px;
		padding: 10px;
		text-align: center;
		font-weight: bold;
	}
</style>
