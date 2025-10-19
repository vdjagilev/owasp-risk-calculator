import Factor from '../Factor.svelte';
import FactorSet from '../FactorSet.svelte';
import type IFactorSetBuilder from '../IFactorSetBuilder';

export class BusinessImpactFactorSetBuilder implements IFactorSetBuilder {
	build(): FactorSet {
		return new FactorSet(
			'BIF',
			'Business Impact Factors',
			'The business impact stems from the technical impact, but requires a deep understanding of what is important to the company running the application. In general, you should be aiming to support your risks with business impact, particularly if your audience is executive level. The business risk is what justifies investment in fixing security problems.',
			[
				new Factor(
					'fd',
					'Financial Damage',
					'How much financial damage will result from an exploit?',
					0,
					[
						{ 0: 'N/A' },
						{ 1: 'Less than the cost to fix the vulnerability' },
						{ 2: '' },
						{ 3: 'Minor effect on annual profit' },
						{ 4: '' },
						{ 5: '' },
						{ 6: '' },
						{ 7: 'Significant effect on annual profit' },
						{ 8: '' },
						{ 9: 'Bancrupcy' }
					]
				),
				new Factor(
					'rd',
					'Reputation Damage',
					'Would an exploit result in reputation damage that would harm the business?',
					0,
					[
						{ 0: 'N/A' },
						{ 1: 'Minimal damage' },
						{ 2: '' },
						{ 3: '' },
						{ 4: 'Loss of major accounts' },
						{ 5: 'Loss of goodwill' },
						{ 6: '' },
						{ 7: '' },
						{ 8: '' },
						{ 9: 'Brand damage' }
					]
				),
				new Factor('nc', 'Non-Compliance', 'How much exposure does non-compliance introduce?', 0, [
					{ 0: 'N/A' },
					{ 1: '' },
					{ 2: 'Minor violation' },
					{ 3: '' },
					{ 4: '' },
					{ 5: 'Clear violation' },
					{ 6: '' },
					{ 7: 'High provile violation' },
					{ 8: '' },
					{ 9: '' }
				]),
				new Factor(
					'pv',
					'Privacy Violation',
					'How much personally identifiable information could be disclosed?',
					0,
					[
						{ 0: 'N/A' },
						{ 1: '' },
						{ 2: '' },
						{ 3: 'One individual' },
						{ 4: '' },
						{ 5: 'Hundreds of people' },
						{ 6: '' },
						{ 7: 'Thousands of people' },
						{ 8: '' },
						{ 9: 'Millions of people' }
					]
				)
			]
		);
	}
}
