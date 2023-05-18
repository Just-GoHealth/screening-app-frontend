import React from 'react';
import { Navbar } from '../../shared/components/navbar/Navbar';
import { useFetchDetials, useInAppNavigation } from '../../shared/custom-hooks';
import { UserResults } from '../../shared/components/health-results';
import { CircularProgress } from '@mui/material';

const screeningReport = [
	'High Risk mental health concerns',
	'Low risk symptoms and signs',
	'Very low risk environmental factors',
];

export const UserHealthSummaryPage = () => {
	const { params } = useInAppNavigation();
	const userId = params.userId;

	const { data: studentData, isLoading } = useFetchDetials(
		['user-details', userId],
		`http://localhost:8900/student/${userId}`
	);

	// console.log({ studentData });

	return (
		<>
			<Navbar
				showBackButton
				showLogo
				className="bg-[#DFE7F4] max-w-6xl mx-auto"
			/>
			{isLoading ? (
				<div className="h-[90vh] flex flex-col items-center justify-center">
					<CircularProgress color="primary" />
				</div>
			) : (
				<>
					<UserResults
						title={'Jacob Davis'}
						subTitle={'School Name | 15 yrs | Male'}
						date={'April 1, 2023'}
						screeningReport={screeningReport}
						recommendations={
							'JustGo Health WorkShop. Focused on psychotherapy and mindfulness techniques (GHC 50)'
						}
						answers={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ad impedit dicta, fugit officia odit quisquam itaque dolorum.'
						}
					/>
				</>
			)}
		</>
	);
};
