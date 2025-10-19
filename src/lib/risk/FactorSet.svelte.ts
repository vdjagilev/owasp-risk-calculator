import type IScoreSource from './IScoreSource';
import type Factor from './Factor.svelte';
import type IDescriptionable from './IDescriptionable';

export default class FactorSet implements IScoreSource, IDescriptionable {
	public id = $state<string>('');
	public name = $state<string>('');
	description: string;
	public factors = $state<Factor[]>([]);

	constructor(id: string, name: string, description: string, factors: Factor[]) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.factors = factors;
	}

	getId(): string {
		return this.id;
	}

	getDescription(): string {
		return this.description;
	}

	public getFactor(): number {
		let score = 0;
		for (let i = 0; i < this.factors.length; i++) {
			score += this.factors[i].score;
		}
		return score / this.factors.length;
	}
}
