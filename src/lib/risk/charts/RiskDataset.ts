import type Risk from '../Risk';

export default class RiskDataset {
	risk: Risk;

	constructor(risk: Risk) {
		this.risk = risk;
	}

	public getData(): any {
		const data: any = {
			labels: [],
			datasets: [
				{
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgb(255, 99, 132)',
					fill: true,
					data: [],
					tension: 0.1,
					label: this.risk.name
				}
			]
		};

		for (let i = 0; i < this.risk.likelihoodFactorSets.length; i++) {
			for (let j = 0; j < this.risk.likelihoodFactorSets[i].factors.length; j++) {
				data.labels.push(this.risk.likelihoodFactorSets[i].factors[j].name);
				data.datasets[0].data.push(this.risk.likelihoodFactorSets[i].factors[j].score);
			}
		}

		for (let i = 0; i < this.risk.impactFactorSets.length; i++) {
			for (let j = 0; j < this.risk.impactFactorSets[i].factors.length; j++) {
				data.labels.push(this.risk.impactFactorSets[i].factors[j].name);
				data.datasets[0].data.push(this.risk.impactFactorSets[i].factors[j].score);
			}
		}

		return data;
	}
}
