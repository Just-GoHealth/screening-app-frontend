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
		<div className="container">
			<div className="heading-group">
				<h4 className="main-heading">{title}</h4>
				<h4 className="sub-heading">{subTitle}</h4>
				<h4 className="sub-heading">{date}</h4>
			</div>

			<div className="space-y-7">
				<div>
					<h3 className="section-heading">Screening Report</h3>
					<h4>From your responses, it is indicated that you may be hafing:</h4>
					<ul className="list-style-disc">
						{screeningReport.map((report, i) => (
							<li key={i}>{report}</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="section-heading">Recommendations</h3>
					<h4>{recommendations}</h4>
					<h4>No additional help</h4>
				</div>

				<div>
					<h3 className="section-heading">View Your Answers</h3>
					<h4 className="text-white">{answers}</h4>
				</div>
			</div>
		</div>
	);
};
