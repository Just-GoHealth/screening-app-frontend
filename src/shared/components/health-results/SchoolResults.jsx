import React from 'react';
import { SectionHeading } from './helpers/SectionHeading';
import { Notice } from './helpers/Notice';
import {
	recommendations,
	screeningReport,
} from '../../data/school-results/schoolData';
import { SchoolSignsAndSymptoms } from './helpers/SchoolSignsAndSymptoms';
import { SchoolRecommendations } from './helpers/SchoolRecommendations';
import { SchoolScreeningReport } from './helpers/SchoolScreeningReport';
import './styles.css';

export const SchoolResults = ({
	title,
	subTitle,
	date,
	contactInfo,
	schoolData,
}) => {
	const { school } = schoolData;

	const mergedScreeningReport = screeningReport.map((report) => {
		const { apiID } = report;

		const grade = school.screening_report.grading[apiID].grade;

		return { ...report, grade };
	});

	const mergedRecommendations = recommendations.map((recommendation) => {
		const { apiID } = recommendation;
		const scoringData = school.recommendations.scoring[apiID].grade;

		return {
			...recommendation,
			scoring: scoringData,
		};
	});

	return (
		<div className="mb-10">
			<div className="health-summary-heading-group">
				<h4 className="health-summary-main-heading">{title}</h4>
				<h4 className="health-summary-sub-heading">{subTitle}</h4>
				<h4 className="health-summary-sub-heading">{contactInfo}</h4>
				<h4 className="health-summary-sub-heading">{date}</h4>
			</div>

			<div className="space-y-10 px-3 xl:px-0 max-w-[75rem] mx-auto text-lg">
				<div>
					<SectionHeading heading="Screening Report" showSeparator={false} />

					<SchoolScreeningReport screeningReport={mergedScreeningReport} />
				</div>

				<div>
					<SectionHeading heading="Recommendations" showSeparator={false} />

					<div className="space-y-5">
						{mergedRecommendations.length > 0 ? (
							mergedRecommendations.map((recommendation, i) => (
								<div key={i}>
									<SchoolRecommendations recommendation={recommendation} />
								</div>
							))
						) : (
							<div>Workshop is optional</div>
						)}
					</div>
				</div>

				<>
					<Notice />
				</>

				{/* 
        This feature has been paused for the current version
        <>
					<SchoolSignsAndSymptoms />
				</> 
        */}
			</div>
		</div>
	);
};
