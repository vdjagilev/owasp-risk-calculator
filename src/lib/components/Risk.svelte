<script lang="ts">
	import Risk from '$lib/risk/Risk.svelte';
	import { Heading, Button, Tabs, TabItem } from 'flowbite-svelte';
	import { editRisk, deleteRisk } from '$lib/risk/Store';
	import EditIcon from './icons/EditIcon.svelte';
	import Radar from './charts/Radar.svelte';
	import DeleteIcon from './icons/DeleteIcon.svelte';
	import RiskForm from './RiskForm.svelte';
	import AddIcon from './icons/AddIcon.svelte';

	let { risk = $bindable(null) }: { risk: Risk | null } = $props();

	function addMitigation() {
		if (risk) {
			let mitigation = Risk.generateNewRisk(risk.id, `${risk.name} (mitigation)`, risk.description);
			Risk.copyFactorScores(risk, mitigation);
			risk.mitigation = mitigation;
		}
	}
</script>

{#if risk === null}
	<p class="text-center">No risk selected</p>
{:else}
	<div class="break-all">
		<Heading tag="h2">
			Risk: {risk.name}
			<Button color="light" size="xs" class="xs p-0 m-0" onclick={() => editRisk.set(risk)}>
				<EditIcon />
			</Button>
			<Button color="light" size="xs" class="xs p-0 m-0" onclick={() => deleteRisk.set(risk)}>
				<DeleteIcon />
			</Button>
		</Heading>
		<p><strong>Description:</strong></p>
		<pre class="pb-5 whitespace-pre-wrap break-words overflow-x-auto">{risk.description}</pre>
		{#if risk.mitigation === null}
			<p class="pb-5">
				<Button color="primary" onclick={addMitigation}>
					<AddIcon />&nbsp; Add mitigation
				</Button>
			</p>
		{/if}
		<div class="risk">
			<Tabs>
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<TabItem open title="Risk">
					<RiskForm bind:risk />
				</TabItem>
				{#if risk.mitigation !== null}
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<TabItem title="Mitigation">
						<RiskForm bind:risk={risk.mitigation} />
					</TabItem>
				{/if}
			</Tabs>
			<div class="container justify-center">
				<div class="w-1/2 mx-auto">
					<Radar bind:risk />
				</div>
			</div>
		</div>
	</div>
{/if}
