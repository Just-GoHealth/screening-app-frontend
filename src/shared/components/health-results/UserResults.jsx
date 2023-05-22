import React from 'react';
import { FcAdvertising } from 'react-icons/fc';
import { Recommendations } from './helpers/Recommendations';
import { SectionHeading } from './helpers/SectionHeading';
import { UserSignsSymptoms } from './helpers/UserSignsSymptoms';
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
		<div className="mb-10">
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

				<div>
					<div>
						<h1 className="health-summary-section-heading mb-2">
							Important Notice
						</h1>

						<div className="relative">
							<div className="absolute left-[-50px] top-3">
								<FcAdvertising className="w-10 h-10" />
							</div>
							<h4>
								These screening results are not a medical diagnosis. You can
								consult with a healthcare professional for further assessment.
								Check the following pages for the answers you gave for each
								question.
							</h4>
						</div>
					</div>
				</div>

				<div>
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
		</div>
	);
};
