<script lang="ts">
	import { Radar } from 'svelte-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		PointElement,
		RadialLinearScale,
		LineElement,
		Filler
	} from 'chart.js';
	import type Risk from '$lib/risk/Risk';
	import RiskDataset from '$lib/risk/charts/RiskDataset';

	export let risk: Risk;

	// ChartJS.defaults.color = 'rgb(209, 213, 219)';

	const options = {
		responsive: true,
		elements: {
			line: {
				borderColor: 'rgb(209, 213, 219)'
				// backgroundColor: 'rgb(209, 213, 219)',
			}
		},
		scales: {
			r: {
				min: 0,
				max: 9,
				grid: {
					color: 'rgb(209, 213, 219)',
					tickColor: 'rgb(209, 213, 219)'
				},
				angleLines: {
					color: 'rgb(209, 213, 219)'
				},
				ticks: {
					color: 'black',
					textStrokeColor: 'red'
				},
				title: {
					color: 'black'
				},
				pointLabels: {
					// color: 'rgb(209, 213, 219)',
					color: 'rgb(255, 99, 132)'
				}
			}
		},
		plugins: {
			legend: {
				labels: {
					// color: 'black',
				}
			}
		}
	};

	ChartJS.register(Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement, Filler);

	$: data = new RiskDataset(risk).getData();
</script>

<Radar class="mt-5 dark:bg-gray-900" bind:data {options} />
