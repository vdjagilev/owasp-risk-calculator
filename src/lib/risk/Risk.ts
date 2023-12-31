import type IScoreSource from './IScoreSource';
import type FactorSet from './FactorSet';
import { BusinessImpactFactorSetBuilder } from './constants/businessImpactFactorSet';
import { LikelihoodFactorSetBuilder } from './constants/likelihoodFactorSet';
import { VulnerabilityFactorSetBuilder } from './constants/vulnerabilityFactorSet';
import { TechImpactFactorSetBuilder } from './constants/techImpactFactorSet';

export default class Risk {
	public id: number;
	public name: string;
	public description: string;
	public likelihoodFactorSets: FactorSet[];
	public impactFactorSets: FactorSet[];

	public likelihoodScoreSource: IScoreSource;
	public impactScoreSource: IScoreSource;

	public mitigation: Risk | null = null;

	constructor(
		id: number,
		name: string,
		description: string,
		likelihoodFactorSets: FactorSet[],
		impactFactorSets: FactorSet[]
	) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.likelihoodFactorSets = likelihoodFactorSets;
		this.impactFactorSets = impactFactorSets;

		this.likelihoodScoreSource = this.getRiskLikelihoodScoreSource();
		this.impactScoreSource = this.getRiskImpactScoreSource();
	}

	public getRiskLikelihoodScoreSource(): IScoreSource {
		return new (class implements IScoreSource {
			risk: Risk;
			public constructor(risk: Risk) {
				this.risk = risk;
			}
			public getFactor(): number {
				return this.risk.getLikelihood();
			}
		})(this);
	}

	public getRiskImpactScoreSource(): IScoreSource {
		return new (class implements IScoreSource {
			risk: Risk;
			public constructor(risk: Risk) {
				this.risk = risk;
			}
			public getFactor(): number {
				return this.risk.getImpact();
			}
		})(this);
	}

	public getLikelihood(): number {
		let score = 0;
		for (let i = 0; i < this.likelihoodFactorSets.length; i++) {
			score += this.likelihoodFactorSets[i].getFactor();
		}
		return score / this.likelihoodFactorSets.length;
	}

	/**
	 *
	 * @returns Impact score based on impact factor sets with priority for the business impact factor set.
	 */
	public getImpact(): number {
		const [techFactorSet, businessFactorSet] = this.impactFactorSets;
		if (businessFactorSet.getFactor() > 0) {
			return businessFactorSet.getFactor();
		}
		return techFactorSet.getFactor();
	}

	public static copyFactorScores(source: Risk, target: Risk): void {
		for (let i = 0; i < source.likelihoodFactorSets.length; i++) {
			const sourceFactorSet = source.likelihoodFactorSets[i];
			const targetFactorSet = target.likelihoodFactorSets[i];
			for (let j = 0; j < sourceFactorSet.factors.length; j++) {
				const sourceFactor = sourceFactorSet.factors[j];
				const targetFactor = targetFactorSet.factors[j];
				targetFactor.score = sourceFactor.score;
			}
		}
		for (let i = 0; i < source.impactFactorSets.length; i++) {
			const sourceFactorSet = source.impactFactorSets[i];
			const targetFactorSet = target.impactFactorSets[i];
			for (let j = 0; j < sourceFactorSet.factors.length; j++) {
				const sourceFactor = sourceFactorSet.factors[j];
				const targetFactor = targetFactorSet.factors[j];
				targetFactor.score = sourceFactor.score;
			}
		}
	}

	public static generateNewRisk(id: number, name: string, description: string): Risk {
		return new Risk(
			id,
			name,
			description,
			[new LikelihoodFactorSetBuilder().build(), new VulnerabilityFactorSetBuilder().build()],
			[new TechImpactFactorSetBuilder().build(), new BusinessImpactFactorSetBuilder().build()]
		);
	}
}
