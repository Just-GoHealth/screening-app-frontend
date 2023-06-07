import React from 'react';
import { UserRecommendations } from './helpers/UserRecommendations';
import { SectionHeading } from './helpers/SectionHeading';
import { Notice } from './helpers/Notice';
import { UserAnswers } from './helpers/UserAnswers';
import './styles.css';

export const UserResults = ({
	studentName,
	studentInfo,
	parentInfo,
	date,
	screeningReportHighlight,
	allStudentScreeningReport,
	recommendationsHighlight,
	allStudentRecommendations,
	student,
}) => {
	return (
		<>
			<div className="health-summary-heading-group">
				<h4 className="health-summary-main-heading">{studentName}</h4>
				<h4 className="health-summary-sub-heading">{studentInfo}</h4>
				<h4 className="health-summary-sub-heading">{parentInfo}</h4>
				<h4 className="health-summary-sub-heading">{date}</h4>
			</div>

			<div className="space-y-10 px-3 md:px-0 max-w-[75rem] mx-auto text-[1rem] md:text-lg">
				<div>
					<SectionHeading
						heading="Screening Report"
						subHeading={screeningReportHighlight}
					/>

					<ul>
						{allStudentScreeningReport.map((report, i) => (
							<li key={i}>
								{report.bullet} {report.title}
							</li>
						))}
					</ul>
				</div>

				<div>
					<SectionHeading
						heading="Recommendations"
						subHeading={recommendationsHighlight}
					/>

					<div className="space-y-5 mt-3 md:mt-0">
						{allStudentRecommendations.length > 0 ? (
							allStudentRecommendations.map((recommendation, i) => (
								<div key={i}>
									<UserRecommendations recommendation={recommendation} />
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

				<div className="pb-10">
					<UserAnswers student={student} />
				</div>
			</div>
		</>
	);
};
