import React from 'react';
import { Recommendations } from './helpers/Recommendations';
import { SectionHeading } from './helpers/SectionHeading';
import { Notice } from './helpers/Notice';
import {
	recommendations,
	screeningReport,
} from '../../data/school-results/schoolData';
import { SchoolSignsAndSymptoms } from './helpers/SchoolSignsAndSymptoms';
import './styles.css';

export const SchoolResults = ({ title, subTitle, date, contactInfo }) => {
	return (
		<div className="mb-10">
			<div className="health-summary-heading-group">
				<h4 className="health-summary-main-heading">{title}</h4>
				<h4 className="health-summary-sub-heading">{subTitle}</h4>
				<h4 className="health-summary-sub-heading">{contactInfo}</h4>
				<h4 className="health-summary-sub-heading">{date}</h4>
			</div>

			<div className="space-y-10 py-10 max-w-[75rem] mx-auto text-lg">
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
