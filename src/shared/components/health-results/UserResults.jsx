import React from 'react';
import { Recommendations } from './helpers/Recommendations';
import { SectionHeading } from './helpers/SectionHeading';
import { UserSignsSymptoms } from './helpers/UserSignsSymptoms';
import { Notice } from './helpers/Notice';
import './styles.css';
import {
	recommendations,
	screeningReport,
} from '../../data/user-results/userData';

export const UserResults = ({
	studentName,
	studentInfo,
	parentInfo,
	date,
	signsRecommendations,
	signsAndSymptomsResults,
}) => {
	return (
		<>
			<div className="health-summary-heading-group">
				<h4 className="health-summary-main-heading">{studentName}</h4>
				<h4 className="health-summary-sub-heading">{studentInfo}</h4>
				<h4 className="health-summary-sub-heading">{parentInfo}</h4>
				<h4 className="health-summary-sub-heading">{date}</h4>
			</div>

			<div className="space-y-10 max-w-[75rem] mx-auto text-lg">
				<div>
					<SectionHeading
						heading="Screening Report"
						subHeading="Mild Mental Health Concern"
					/>

					<ul>
						{screeningReport.map((report, i) => (
							<li key={i}>
								{report.bullet} {report.title}
							</li>
						))}
					</ul>
				</div>

				<div>
					<SectionHeading heading="Recommendations" subHeading="Workshop" />

					<div className="space-y-5">
						{recommendations.map((recomendation, i) => (
							<div key={i}>
								<Recommendations
									title={recomendation.title}
									body={recomendation.body}
									icon={recomendation.icon}
								/>
							</div>
						))}
					</div>
				</div>

				<>
					<Notice />
				</>

				<div className="pb-10">
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
