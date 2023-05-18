import React from 'react';
import { Recommendations } from './helpers/Recommendations';
import { SectionHeading } from './helpers/SectionHeading';
import { ScreeningList } from './helpers/ScreeningList';
import { SchoolSignsSymptoms } from './helpers/SchoolSignsSymptoms';
import { GroupSign } from './helpers/GroupSign';
import './styles.css';

export const SchoolResults = ({
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
					<SectionHeading heading="Screening Report" showSeparator={false} />

					<ul className="list-disc space-y-7">
						<ScreeningList />
					</ul>
				</div>

				<div>
					<SectionHeading heading="Recommendations" showSeparator={false} />

					<div className="">
						<Recommendations subTitle={'- 20 (15%)'} />
					</div>
				</div>

				<div>
					<SectionHeading
						heading="Signs & Symptoms"
						subHeading={
							<>
								<GroupSign
									sign="No Significant Emotional Disorder"
									number={20}
								/>{' '}
								<GroupSign sign="Mild Symptoms" number={40} />
							</>
						}
					/>

					<ol className="list-decimal space-y-7">
						<SchoolSignsSymptoms />
					</ol>
				</div>
			</div>
		</>
	);
};
