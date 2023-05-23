import React from "react";
import { Recommendations } from "./helpers/Recommendations";
import { SectionHeading } from "./helpers/SectionHeading";
import { ScreeningList } from "./helpers/ScreeningList";
import { SchoolSubsection } from "./helpers/SchoolSubsection";
import { GroupSign } from "./helpers/GroupSign";
import "./styles.css";
import { Notice } from "./helpers/Notice";
import data from "../../data/data.json";
import {
	recommendations,
	screeningReport,
} from '../../data/school-results/schoolData';

export const SchoolResults = ({
  title,
  subTitle,
  date,

}) => {
  return (
    <>
      <div className="health-summary-heading-group">
        <h4 className="health-summary-main-heading">{title}</h4>
        <h4 className="health-summary-sub-heading">{subTitle}</h4>
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

        {data.data.slice(1).map((section, index) => (
          <div className="mb-10" key={section.id}>
            <SectionHeading
              heading={section.name}
              subHeading={
                <>
                  <GroupSign
                    sign="No Significant Emotional Disorder"
                    number={20}
                  />{" "}
                  <GroupSign sign="Mild Symptoms" number={40} />
                </>
              }
            />

            <ol className="list-decimal space-y-7">
              {section.subSections.map((subSection, index) => (
				<div key={index}>
					<SchoolSubsection sectionName={subSection.name} questions={subSection.questions} />
				</div>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </>
  );
};
