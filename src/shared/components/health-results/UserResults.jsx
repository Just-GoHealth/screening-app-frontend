import React from 'react';
import { Recommendations } from './helpers/Recommendations';
import { SectionHeading } from './helpers/SectionHeading';
import { UserSignsSymptoms } from './helpers/UserSignsSymptoms';
import './styles.css';

export const UserResults = ({
	title,
	subTitle,
	date,
	screeningReport,
	recommendations,
}) => {
	return (
		<>
			<div className="health-summary-heading-group">
				<h4 className="health-summary-main-heading">{title}</h4>
				<h4 className="health-summary-sub-heading">{subTitle}</h4>
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
					<SectionHeading
						heading="Signs & Symptoms"
						subHeading="Mild Signs & Symptoms"
					/>

					<ol className="list-decimal space-y-7">
						<UserSignsSymptoms />
					</ol>
				</div>
			</div>
		</>
	);
};
