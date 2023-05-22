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

	const { data = {}, isLoading } = useFetchDetials(
		['user-details', schoolId],
		`http://localhost:8900/schools/${schoolId}`
	);
	const { schoolData } = data;

	const schoolName = schoolData?.school.school_name;
	const schoolType = schoolData?.school.school_type;
	const numberOfStudents = schoolData?.students.length
		? schoolData.students.length +
		  `${schoolData.students.length > 1 ? ' Students' : ' Student'}`
		: '0 Students';
	const date = new Date(schoolData?.school.createdAt);
	const month = date?.toLocaleString('en-US', { month: 'short' });
	const day = date?.getDate();
	const year = date?.getFullYear();
	const fullDate = month + ' ' + day + ', ' + year;

	const symptomCounts = {};
	schoolData?.students.forEach((student) => {
		const signsAndSymptoms = student.signs_and_symptoms;

		for (const key in signsAndSymptoms) {
			const value = signsAndSymptoms[key];

			if (typeof value === 'object') {
				// If the value is an object, iterate over its keys and count the occurrences
				if (!symptomCounts[key]) {
					symptomCounts[key] = {};
				}

				for (const innerKey in value) {
					const innerValue = value[innerKey];
					const countKey = `${innerKey}:${innerValue}`;

					if (symptomCounts[key][countKey]) {
						symptomCounts[key][countKey]++;
					} else {
						symptomCounts[key][countKey] = 1;
					}
				}
			} else {
				// If the value is not an object, count the occurrences directly
				const countKey = `${key}:${value}`;

				if (symptomCounts[key]) {
					symptomCounts[key]++;
				} else {
					symptomCounts[key] = 1;
				}
			}
		}
	});

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
						subTitle={`${schoolType} | ${numberOfStudents}`}
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
