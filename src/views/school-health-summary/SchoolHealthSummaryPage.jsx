import React from 'react';
import { HealthSummary } from '../../shared/components/health-summary';
import { Navbar } from '../../shared/components/navbar/Navbar';
import { useFetchDetials, useInAppNavigation } from '../../shared/custom-hooks';

const screeningReport = [
	'High Risk mental health concerns',
	'Low risk symptoms and signs',
	'Very low risk environmental factors',
];

export const SchoolHealthSummaryPage = () => {
	const { params } = useInAppNavigation();
	const schoolId = params.schoolId;

	const { data: schoolData } = useFetchDetials(
		['user-details', schoolId],
		`http://localhost:8900/schools/${schoolId}`
	);

	// console.log({ schoolData });

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
		<div className="bg-[#DFE7F4]">
			<Navbar showBackButton showLogo />

			<HealthSummary
				title={schoolName}
				subTitle={`Junior High Schoolxx | ${numberOfStudents}`}
				date={fullDate ? fullDate : ''}
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
