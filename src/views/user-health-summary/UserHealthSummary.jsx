import React from 'react';
import { HealthSummary } from '../../shared/components/health-summary';

const screeningReport = [
	'High Risk mental health concerns',
	'Low risk symptoms and signs',
	'Very low risk environmental factors',
];

export const UserHealthSummary = () => {
	return (
		<div>
			<HealthSummary
				title={'Jacob Davis'}
				subTitle={'Junior High School | 150 Students | Male'}
				date={'April 1, 2023'}
				screeningReport={screeningReport}
				recommendations={
					'JustGo Health WorkShop. Focused on psychotherapy and mindfulness techniques (GHC 50)'
				}
				answers={
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ad impedit dicta, fugit officia odit quisquam itaque dolorum.'
				}
			/>
		</div>
	);
};
