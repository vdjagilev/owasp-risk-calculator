<script lang="ts">
	import Risk from '$lib/risk/Risk';
	import { Heading, Button, Tabs, TabItem } from 'flowbite-svelte';
	import { editRisk, deleteRisk } from '$lib/risk/Store';
	import EditIcon from './icons/EditIcon.svelte';
	import Radar from './charts/Radar.svelte';
	import DeleteIcon from './icons/DeleteIcon.svelte';
	import RiskForm from './RiskForm.svelte';
	import AddIcon from './icons/AddIcon.svelte';

	export let risk: Risk | null = null;

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
			<Button color="none" size="xs" btnClass="xs p-0 m-0" on:click={() => editRisk.set(risk)}>
				<EditIcon />
			</Button>
			<Button color="none" size="xs" btnClass="xs p-0 m-0" on:click={() => deleteRisk.set(risk)}>
				<DeleteIcon />
			</Button>
		</Heading>
		<p><strong>Description:</strong></p>
		<pre class="pb-5">{risk.description}</pre>
		{#if risk.mitigation === null}
			<p class="pb-5">
				<Button color="primary" on:click={addMitigation}>
					<AddIcon />&nbsp; Add mitigation
				</Button>
			</p>
		{/if}
		<div class="risk">
			<Tabs>
				<TabItem open>
					<span slot="title">Risk</span>
					<RiskForm bind:risk />
				</TabItem>
				{#if risk.mitigation !== null}
					<TabItem>
						<span slot="title">Mitigation</span>
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
