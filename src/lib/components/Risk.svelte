<script lang="ts">
	import type Risk from '$lib/risk/Risk';
	import { Heading, Button, Tabs, TabItem } from 'flowbite-svelte';
	import { editRisk, deleteRisk } from '$lib/risk/Store';
	import EditIcon from './icons/EditIcon.svelte';
	import Radar from './charts/Radar.svelte';
	import DeleteIcon from './icons/DeleteIcon.svelte';
	import RiskForm from './RiskForm.svelte';

	export let risk: Risk | null = null;
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
		<p class="pb-5">{risk.description}</p>
		<div class="risk">
			<Tabs>
				<TabItem open>
					<span slot="title">Risk</span>
					<RiskForm bind:risk />
				</TabItem>
				<TabItem>
					<span slot="title">Mitigation</span>
					{#if risk.mitigation === null}
						<p class="text-center">No mitigation plan</p>
					{:else}
						<RiskForm bind:risk={risk.mitigation} />
					{/if}
				</TabItem>
			</Tabs>
			<div class="container justify-center">
				<div class="w-1/2 mx-auto">
					<Radar bind:risk />
				</div>
			</div>
		</div>
	</div>
{/if}
