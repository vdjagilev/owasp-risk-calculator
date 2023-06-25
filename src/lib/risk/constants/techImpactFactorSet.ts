import Factor from '../Factor';
import FactorSet from '../FactorSet';
import type IFactorSetBuilder from '../IFactorSetBuilder';

export class TechImpactFactorSetBuilder implements IFactorSetBuilder {
	build(): FactorSet {
		return new FactorSet(
			'TIF',
			'Technical Impact Factors',
			'Technical impact can be broken down into factors aligned with the traditional security areas of concern: confidentiality, integrity, availability, and accountability. The goal is to estimate the magnitude of the impact on the system if the vulnerability were to be exploited.',
			[
				new Factor(
					'loc',
					'Loss of Confidentiality',
					'How much data can be disclosed and how sensitive is it?',
					0,
					[
						{ 0: 'N/A' },
						{ 1: '' },
						{ 2: 'Minimal non-sensitive data disclosed' },
						{ 3: '' },
						{ 4: '' },
						{ 5: '' },
						{ 6: 'Minimal critical data or extensive non-sensitive data disclosed' },
						{ 7: 'Extensive critical data disclosed' },
						{ 8: '' },
						{ 9: 'All data disclosed' }
					]
				),
				new Factor(
					'loi',
					'Loss of Integrity',
					'How much data can be modified and how sensitive is it?',
					0,
					[
						{ 0: 'N/A' },
						{ 1: 'Minimal slightly corrupt data' },
						{ 2: '' },
						{ 3: 'Minimal seriously corrupt data' },
						{ 4: '' },
						{ 5: 'Extensive slightly corrupt data' },
						{ 6: '' },
						{ 7: 'Extensive seriously corrupt data' },
						{ 8: '' },
						{ 9: 'All data totally corrupt' }
					]
				),
				new Factor(
					'lov',
					'Loss of Availability',
					'How much service can be lost and how vital is it?',
					0,
					[
						{ 0: 'N/A' },
						{ 1: 'Minimal secondary services interrupted' },
						{ 2: '' },
						{ 3: 'Minimal primary services interrupted' },
						{ 4: '' },
						{ 5: 'Extensive secondary services interrupted' },
						{ 6: '' },
						{ 7: 'Extensive primary services interrupted' },
						{ 8: '' },
						{ 9: 'All services are completely lost' }
					]
				),
				new Factor(
					'loa',
					'Loss of Accountability',
					"Are threat agent's actions traceable to an individual?",
					0,
					[
						{ 0: 'N/A' },
						{ 1: 'Fully traceable' },
						{ 2: '' },
						{ 3: '' },
						{ 4: '' },
						{ 5: '' },
						{ 6: '' },
						{ 7: 'Possibly traceable' },
						{ 8: '' },
						{ 9: 'Fully anonymous' }
					]
				)
			]
		);
	}
}
