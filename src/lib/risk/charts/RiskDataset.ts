import type Risk from '../Risk.svelte';

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

		if (this.risk?.mitigation) {
			data.datasets.push({
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgb(54, 162, 235)',
				fill: true,
				data: [],
				tension: 0.1,
				label: this.risk.name + ' (mitigation)'
			});

			for (let i = 0; i < this.risk.mitigation.likelihoodFactorSets.length; i++) {
				for (let j = 0; j < this.risk.mitigation.likelihoodFactorSets[i].factors.length; j++) {
					data.datasets[1].data.push(this.risk.mitigation.likelihoodFactorSets[i].factors[j].score);
				}
			}

			for (let i = 0; i < this.risk.mitigation.impactFactorSets.length; i++) {
				for (let j = 0; j < this.risk.mitigation.impactFactorSets[i].factors.length; j++) {
					data.datasets[1].data.push(this.risk.mitigation.impactFactorSets[i].factors[j].score);
				}
			}
		}

		return data;
	}
}
