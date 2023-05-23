import React from 'react';
import { Navbar } from '../../shared/components/navbar/Navbar';
import { useFetchDetials, useInAppNavigation } from '../../shared/custom-hooks';
import { UserResults } from '../../shared/components/health-results';
import { CircularProgress } from '@mui/material';

export const UserHealthSummaryPage = () => {
	const { params } = useInAppNavigation();
	const userId = params.userId;

	const { data = {}, isLoading } = useFetchDetials(
		['user-details', userId],
		`http://localhost:8900/student/${userId}`
	);
	const { student } = data;

	const date = new Date(student?.updatedAt);
	const month = date.toLocaleString('en-US', { month: 'short' });
	const year = date.getFullYear();
	const day = date.getDate();
	const fullDate = month + ' ' + day + ', ' + year;

	const parentInfo =
		student?.parent_info.parent_name +
		' | ' +
		student?.parent_info.parent_mobile;

	const signsAndSymptoms = student?.signs_and_symptoms;
	const signsRecommendations =
		signsAndSymptoms?.recommendation_on_signs.join(' ');
	const signsAndSymptomsResults =
		signsAndSymptoms && Object.entries(signsAndSymptoms);

	return (
		<>
			<Navbar
				showBackButton
				showLogo
				className="bg-[#DFE7F4] max-w-[75rem] mx-auto"
			/>
			{isLoading ? (
				<div className="h-[90vh] flex flex-col items-center justify-center">
					<CircularProgress color="primary" />
				</div>
			) : (
				<>
					<UserResults
						studentName={student.full_name}
						studentInfo={`${student.schoolId.school_name} | ${student.age} yrs | ${student.gender}`}
						parentInfo={parentInfo}
						date={fullDate}
						signsAndSymptomsResults={signsAndSymptomsResults}
						signsRecommendations={signsRecommendations}
					/>
				</>
			)}
		</>
	);
};
