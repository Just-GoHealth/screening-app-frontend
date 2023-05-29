import React from 'react';
import { Navbar } from '../../shared/components/navbar/Navbar';
import { useFetchDetials, useInAppNavigation } from '../../shared/custom-hooks';
import { UserResults } from '../../shared/components/health-results';
import { CircularProgress } from '@mui/material';
import { Bullet } from '../../shared/components/health-results/helpers/Bullet';
import { FcHighPriority } from 'react-icons/fc';
import { recommendations } from '../../shared/data/user-results/userData';
import { findKeysAndValuesStartingWith } from '../../shared/helpers/helperFunctions';

export const UserHealthSummaryPage = () => {
	const { params } = useInAppNavigation();
	const userId = params.userId;

	const { data = {}, isLoading } = useFetchDetials(
		['user-details', userId],
		`https://screening-tool-api.onrender.com/student/${userId}`
	);
	const { student } = data;

	// User's Last Screening Date
	const date = new Date(student?.updatedAt);
	const month = date.toLocaleString('en-US', { month: 'short' });
	const year = date.getFullYear();
	const day = date.getDate();
	const fullDate = month + ' ' + day + ', ' + year;

	// User Parent Info
	const parentInfo =
		student?.parent_info.parent_name +
		' ( ' +
		student?.parent_info.parent_mobile +
		' )';

	// User Screening Report
	const screeningReport = student?.screening_report;
	const screeningReportHighlight = screeningReport?.join(', ');
	const allStudentScreeningReport = [];
	const outcomeOnScreeningData = findKeysAndValuesStartingWith(
		student,
		'outcome_on'
	);
	outcomeOnScreeningData?.forEach((item) => {
		allStudentScreeningReport.push({
			title: item.value,
			bullet: <Bullet />,
		});
	});

	const suicidalThoughts = screeningReport?.find((item) =>
		item.includes('Suicidal Thoughts')
	);
	if (suicidalThoughts) {
		allStudentScreeningReport.push({
			title: suicidalThoughts,
			bullet: <FcHighPriority className="inline mb-1" />,
		});
	}

	// Student Recommendations
	const studentRecommendations = student?.student_recommendation;
	const recommendationsHighlight = studentRecommendations?.join(', ');
	const allStudentRecommendations = recommendations.filter((recommendation) => {
		const { title } = recommendation;
		return studentRecommendations?.some((word) => title.includes(word));
	});

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
						screeningReportHighlight={screeningReportHighlight}
						allStudentScreeningReport={allStudentScreeningReport}
						recommendationsHighlight={recommendationsHighlight}
						allStudentRecommendations={allStudentRecommendations}
						student={student}
					/>
				</>
			)}
		</>
	);
};
