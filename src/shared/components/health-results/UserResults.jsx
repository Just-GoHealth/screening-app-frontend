import React from 'react';
import { Recommendations } from './helpers/Recommendations';
import { SectionHeading } from './helpers/SectionHeading';
import { UserSignsSymptoms } from './helpers/UserSignsSymptoms';
import { Notice } from './helpers/Notice';
import './styles.css';

export const UserResults = ({
	studentName,
	studentInfo,
	date,
	screeningReport,
	recommendations,
	signsRecommendations,
	signsAndSymptomsResults,
}) => {
	return (
		<>
			<div className="health-summary-heading-group">
				<h4 className="health-summary-main-heading">{studentName}</h4>
				<h4 className="health-summary-sub-heading">{studentInfo}</h4>
				<h4 className="health-summary-sub-heading">{date}</h4>
			</div>

			<div className="space-y-10 max-w-6xl mx-auto text-lg">
				<div>
					<SectionHeading
						heading="Screening Report"
						subHeading="Mild Mental Health Concern"
					/>

					<ul className="list-disc">
						{screeningReport.map((report, i) => (
							<li key={i}>{report}</li>
						))}
					</ul>
				</div>

				<div>
					<SectionHeading heading="Recommendations" subHeading="Workshop" />

					<div className="">
						<Recommendations />
					</div>
				</div>

				<>
					<Notice />
				</>

				<div className="mb-10">
					<SectionHeading
						heading="Signs & Symptoms"
						subHeading={signsRecommendations}
					/>

					<ol className="list-decimal list-inside space-y-7">
						<UserSignsSymptoms
							signsAndSymptomsResults={signsAndSymptomsResults}
						/>
					</ol>
				</div>
			</div>
		</>
	);
};
