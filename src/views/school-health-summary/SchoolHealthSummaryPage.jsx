import React from 'react';
import { CircularProgress } from '@mui/material';
import { Navbar } from '../../shared/components/navbar/Navbar';
import { useFetchDetials, useInAppNavigation } from '../../shared/custom-hooks';
import { SchoolResults } from '../../shared/components/health-results';

const screeningReport = [
	'High Risk mental health concerns',
	'Low risk symptoms and signs',
	'Very low risk environmental factors',
];

export const SchoolHealthSummaryPage = () => {
	const { params } = useInAppNavigation();
	const schoolId = params.schoolId;

	const { data: schoolData, isLoading } = useFetchDetials(
		['user-details', schoolId],
		`http://localhost:8900/schools/${schoolId}`
	);

	const schoolName = schoolData?.school.school_name;
	const numberOfStudents = schoolData?.students.length
		? schoolData.students.length +
		  `${schoolData.students.length > 1 ? ' Students' : ' Student'}`
		: '0 Students';
	const date = new Date(schoolData?.school.createdAt);
	const month = date?.toLocaleString('en-US', { month: 'short' });
	const day = date?.getDate();
	const year = date?.getFullYear();
	const fullDate = month + ' ' + day + ', ' + year;

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
					<SchoolResults
						title={schoolName}
						subTitle={`Junior High Schoolxx | ${numberOfStudents}`}
						date={fullDate}
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
