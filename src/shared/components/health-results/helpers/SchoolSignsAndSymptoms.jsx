import React from 'react';

import data from '../../../data/data.json';
import { SectionHeading } from './SectionHeading';
import { GroupSign } from './GroupSign';
import { SchoolSubsection } from './SchoolSubsection';

export const SchoolSignsAndSymptoms = () => {
	return (
		<>
			{data.data.slice(1).map((section, index) => (
				<div className="mb-10" key={section.id}>
					<SectionHeading
						heading={section.name}
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
						{section.subSections.map((subSection, index) => (
							<div key={index}>
								<SchoolSubsection
									sectionName={subSection.name}
									questions={subSection.questions}
								/>
							</div>
						))}
					</ol>
				</div>
			))}
		</>
	);
};
