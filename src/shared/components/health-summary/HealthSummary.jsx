import React from 'react';
import './HealthSummary.styles.css';

export const HealthSummary = ({
	title,
	subTitle,
	date,
	screeningReport,
	recommendations,
	answers,
}) => {
	return (
		<div className="health-summary-container">
			<div className="health-summary-heading-group">
				<h4 className="health-summary-main-heading">{title}</h4>
				<h4 className="health-summary-sub-heading">{subTitle}</h4>
				<h4 className="health-summary-sub-heading">{date}</h4>
			</div>

			<div className="space-y-7">
				<div>
					<h3 className="health-summary-section-heading">Screening Report</h3>
					<h4>From your responses, it is indicated that you may be having:</h4>
					<ul className="list-disc">
						{screeningReport.map((report, i) => (
							<li key={i}>{report}</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="health-summary-section-heading">Recommendations</h3>
					<h4>{recommendations}</h4>
					<h4>No additional help</h4>
				</div>

				<div>
					<h3 className="health-summary-section-heading">View Your Answers</h3>
					<h4 className="text-white">{answers}</h4>
				</div>
			</div>
		</div>
	);
};
