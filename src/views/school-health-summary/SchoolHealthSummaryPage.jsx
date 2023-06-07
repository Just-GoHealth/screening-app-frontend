import React from 'react';
import { CircularProgress } from '@mui/material';
import { Navbar } from '../../shared/components/navbar/Navbar';
import { useFetchDetials, useInAppNavigation } from '../../shared/custom-hooks';
import { SchoolResults } from '../../shared/components/health-results';

export const SchoolHealthSummaryPage = () => {
	const { params } = useInAppNavigation();
	const schoolId = params.schoolId;

	const { data = {}, isLoading } = useFetchDetials(
		['user-details', schoolId],
		`https://screening-tool-api.onrender.com/schools/${schoolId}`
	);
	const { schoolData } = data;

	// School Name
	const schoolName = schoolData?.school.school_name;

	// School Type
	const schoolType = schoolData?.school.school_type;

	// Number of Students
	const numberOfStudents = schoolData?.students.length
		? schoolData.students.length +
		  `${schoolData.students.length > 1 ? ' Students' : ' Student'}`
		: '0 Students';

	// School Date Created
	const date = new Date(schoolData?.school.createdAt);
	const month = date?.toLocaleString('en-US', { month: 'short' });
	const day = date?.getDate();
	const year = date?.getFullYear();
	const fullDate = `${month} ${day}, ${year}`;

	// School Contact Info
	const schooolContact = schoolData?.school.contact.mobile_number;
	const coordinatorName = schoolData?.school.coordinator
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
	const contactInfo = coordinatorName + ` (${schooolContact})`;

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
					<SchoolResults
						title={schoolName}
						subTitle={`${schoolType} | ${numberOfStudents}`}
						contactInfo={contactInfo}
						date={fullDate}
						schoolData={schoolData}
					/>
				</>
			)}
		</>
	);
};
