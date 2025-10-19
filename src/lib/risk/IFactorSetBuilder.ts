import type FactorSet from './FactorSet.svelte';

export default interface IFactorSetBuilder {
	build(): FactorSet;
}
