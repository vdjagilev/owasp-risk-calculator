<script lang="ts">
	import { Button, Modal, Label, Input, Textarea } from 'flowbite-svelte';
	import { risks, editRisk } from '$lib/risk/Store';
	import type Risk from '$lib/risk/Risk';

	let risk: Risk | null;

	let formModal = false;
	let name: string;
	let description: string;

	function editCurrentRisk() {
		if (risk) {
			risk.name = name;
			risk.description = description;
			// we need to update the store to reflect changes in the UI
			risks.update((risks) => {
				return [...risks];
			});
			editRisk.set(null);
		}
	}

	editRisk.subscribe((risk) => {
		formModal = !!risk;
		name = risk?.name || '';
		description = risk?.description || '';
	});

	$: risk = $editRisk;
</script>

<Modal
	bind:open={formModal}
	on:close={() => editRisk.set(null)}
	size="xs"
	autoclose={false}
	class="w-full"
>
	<form class="flex flex-col space-y-6" action="#" on:submit|preventDefault={editCurrentRisk}>
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
		<Button type="submit" class="w-full1">Edit Risk</Button>
	</form>
</Modal>
