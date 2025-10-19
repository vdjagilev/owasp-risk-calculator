import Factor from '../Factor.svelte';
import FactorSet from '../FactorSet.svelte';
import type IFactorSetBuilder from '../IFactorSetBuilder';

export class LikelihoodFactorSetBuilder implements IFactorSetBuilder {
	build(): FactorSet {
		return new FactorSet(
			'TAF',
			'Threat Agent Factors',
			'The first set of factors are related to the threat agent involved. The goal here is to estimate the likelihood of a successful attack by this group of threat agents. Use the worst-case threat agent.',
			[
				new Factor(
					'sl',
					'Skill Level',
					'How technically skilled is this group or threat agents?',
					0,
					[
						{ 0: 'N/A' },
						{ 1: 'Security penetration skills' },
						{ 2: '' },
						{ 3: 'Network and programming skills' },
						{ 4: '' },
						{ 5: 'Advanced computer user' },
						{ 6: 'Some technical skills' },
						{ 7: '' },
						{ 8: '' },
						{ 9: 'No technical skills' }
					]
				),
				new Factor(
					'm',
					'Motive',
					'How motivated is the threat agent to find and exploit this vulnerability?',
					0,
					[
						{ 0: 'N/A' },
						{ 1: 'Low or no reward' },
						{ 2: '' },
						{ 3: '' },
						{ 4: 'Possible reward' },
						{ 5: '' },
						{ 6: '' },
						{ 7: 'High reward' },
						{ 8: '' },
						{ 9: 'Extreme reward' }
					]
				),
				new Factor(
					'o',
					'Opportunity',
					'What resources and opportunities are required to exploit this vulnerability?',
					0,
					[
						{ 0: 'Full access or expensive resources required' },
						{ 1: '' },
						{ 2: '' },
						{ 3: '' },
						{ 4: 'Special access to resources is required' },
						{ 5: '' },
						{ 6: '' },
						{ 7: 'Some access or resources required' },
						{ 8: '' },
						{ 9: 'No access or resource required' }
					]
				),
				new Factor('s', 'Size', 'How large is this group of threat agents?', 0, [
					{ 0: 'N/A' },
					{ 1: '' },
					{ 2: 'Developers or system administrators' },
					{ 3: '' },
					{ 4: 'Intranet users' },
					{ 5: 'Partners' },
					{ 6: 'Authenticated users' },
					{ 7: '' },
					{ 8: '' },
					{ 9: 'Anonymous internet users' }
				])
			]
		);
	}
}
