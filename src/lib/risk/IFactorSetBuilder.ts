import type FactorSet from './FactorSet';

export default interface IFactorSetBuilder {
	build(): FactorSet;
}
