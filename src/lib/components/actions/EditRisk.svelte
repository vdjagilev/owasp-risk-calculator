<script lang="ts">
	import { Button, Modal, Label, Input, Textarea } from 'flowbite-svelte';
	import { risks, editRisk } from '$lib/risk/Store';
	import type Risk from '$lib/risk/Risk.svelte';

	let risk = $derived($editRisk);
	let formModal = $state(false);
	let name = $state('');
	let description = $state('');

	// Sync form fields when editRisk changes
	$effect(() => {
		formModal = !!$editRisk;
		name = $editRisk?.name || '';
		description = $editRisk?.description || '';
	});

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
</script>

<Modal
	bind:open={formModal}
	onclose={() => editRisk.set(null)}
	size="xs"
	autoclose={false}
	class="w-full"
>
	<form
		class="flex flex-col space-y-6"
		action="#"
		onsubmit={(e) => {
			e.preventDefault();
			editCurrentRisk();
		}}
	>
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Risk Basic Information</h3>
		<Label class="space-y-2">
			<span>Name</span>
			<Input
				type="text"
				name="name"
				placeholder="Leave port 8080 opened"
				maxlength={50}
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
				rows={8}
			/>
		</Label>
		<Button type="submit" class="w-full1">Edit Risk</Button>
	</form>
</Modal>
