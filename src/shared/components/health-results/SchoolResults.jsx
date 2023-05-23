import React from "react";
import { Recommendations } from "./helpers/Recommendations";
import { SectionHeading } from "./helpers/SectionHeading";
import { ScreeningList } from "./helpers/ScreeningList";
import { SchoolSubsection } from "./helpers/SchoolSubsection";
import { GroupSign } from "./helpers/GroupSign";
import "./styles.css";
import { Notice } from "./helpers/Notice";
import data from "../../data/data.json";

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

      <div className="space-y-10 max-w-[75rem] mx-auto text-lg">
        <div>
          <SectionHeading heading="Screening Report" showSeparator={false} />

          <ul className="list-disc space-y-7">
            <ScreeningList />
          </ul>
        </div>

        <div>
          <SectionHeading heading="Recommendations" showSeparator={false} />

          <div className="">
            <Recommendations subTitle={"- 20 (15%)"} />
          </div>
        </div>

        <>
          <Notice />
        </>

        {data.data.slice(1).map((section) => (
          <div className="mb-10">
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
              {section.subSections.map((subSection) => (
                <SchoolSubsection sectionName={subSection.name} questions={subSection.questions} />
              ))}
            </ol>
          </div>
        ))}
      </div>
    </>
  );
};
