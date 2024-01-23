<script lang="ts">
	import { risks } from '../lib/risk/Store';
	import { Heading } from 'flowbite-svelte';
	import RiskComponent from '$lib/components/Risk.svelte';
	import { DarkMode } from 'flowbite-svelte';
	import AddRisk from '$lib/components/actions/AddRisk.svelte';
	import ClearRisks from '$lib/components/actions/ClearRisks.svelte';
	import Separator from '$lib/components/Separator.svelte';
	import EditRisk from '$lib/components/actions/EditRisk.svelte';
	import DeleteRisk from '$lib/components/actions/DeleteRisk.svelte';

</script>

<div class="container mx-auto my-10">
	<Heading tag="h1">OWASP Risk Rating Calculator<DarkMode /></Heading>
	<div class="my-8">
		<AddRisk />
		<ClearRisks />
	</div>
	<Separator />
	<div>
		{#each $risks as risk}
			<RiskComponent bind:risk />
			<Separator />
		{/each}
	</div>
	<EditRisk />
	<DeleteRisk />
</div>
