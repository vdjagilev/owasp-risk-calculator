<script lang="ts">
	import { Button, Modal, Label, Input, Textarea } from 'flowbite-svelte';
	import { risks } from '$lib/risk/Store';
	import Risk from '$lib/risk/Risk';
	let formModal = false;

	let name: string;
	let description: string;

	function addNewRisk() {
		risks.update((risks) => {
			let risk = Risk.generateNewRisk(risks.length + 1, name, description);
			risk.mitigation = Risk.generateNewRisk(
				risk.id,
				`${risk.name} (mitigation)`,
				risk.description
			);

			return [...risks, risk];
		});
		formModal = false;
		name = '';
		description = '';
	}
</script>

<Button on:click={() => (formModal = true)}>Add New Risk</Button>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
	<form class="flex flex-col space-y-6" action="#" on:submit|preventDefault={addNewRisk}>
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Risk Basic Information</h3>
		<Label class="space-y-2">
			<span>Name</span>
			<Input
				type="text"
				name="name"
				placeholder="Leave port 8080 opened"
				maxlength="50"
				required
				bind:value={name}
			/>
		</Label>
		<Label class="space-y-2">
			<span>Description</span>
			<Textarea
				name="description"
				placeholder="Description"
				required
				bind:value={description}
				rows="8"
			/>
		</Label>
		<Button type="submit" class="w-full1">Add New Risk</Button>
	</form>
</Modal>
