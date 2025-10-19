import type IDescriptionable from './IDescriptionable';

export default class Factor implements IDescriptionable {
	public id: string;
	public name: string;
	public description: string;
	public score = $state<number>(0);
	public options: object[] = [];

	constructor(id: string, name: string, description: string, score: number, options: object[]) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.score = score;
		this.options = options;
	}

	getId(): string {
		return this.id;
	}

	getDescription(): string {
		return this.description;
	}

	public getSelectOptions(): { name: string; value: number }[] {
		const selectOptions: { name: string; value: number }[] = [];
		for (let i = 0; i < this.options.length; i++) {
			selectOptions[i] = {
				value: parseInt(Object.keys(this.options[i])[0]),
				name: Object.values(this.options[i])[0]
			};
		}
		return selectOptions;
	}
}

export const FactorColorMap = [
	'#9cc2e5',
	'#6ea0d2',
	'#3d7ec0',
	'#0d5ca9',
	'#fed655',
	'#fcbf3f',
	'#faa61a',
	'#f78f00',
	'#f47700',
	'#f15e00'
];
