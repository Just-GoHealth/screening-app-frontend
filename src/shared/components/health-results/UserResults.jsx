import React from "react";
import { Recommendations } from "./helpers/Recommendations";
import { SectionHeading } from "./helpers/SectionHeading";
import { UserSubsectionResults } from "./helpers/UserSubsectionResults";
import { Notice } from "./helpers/Notice";
import "./styles.css";

export const UserResults = ({
  studentName,
  studentInfo,
  parentInfo,
  date,
  signsRecommendations,
  signsAndSymptomsResults,
  triggersResults,
  triggersRecommendations,
  riskFactorsResults,
  riskFactorsRecommendations,
  supportSystemsResults,
  supportSystemsRecommendations,
  screeningReportHighlight,
  allStudentScreeningReport,
  recommendationsHighlight,
  allStudentRecommendations,
}) => {
  return (
    <>
      <div className="health-summary-heading-group">
        <h4 className="health-summary-main-heading">{studentName}</h4>
        <h4 className="health-summary-sub-heading">{studentInfo}</h4>
        <h4 className="health-summary-sub-heading">{parentInfo}</h4>
        <h4 className="health-summary-sub-heading">{date}</h4>
      </div>

      <div className="space-y-10 max-w-[85rem] mx-auto text-lg px-[5rem]">
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

          <div className="space-y-5">
            {allStudentRecommendations.length > 0 ? (
              allStudentRecommendations.map((recommendation, i) => (
                <div key={i}>
                  <Recommendations recommendation={recommendation} />
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
          <SectionHeading
            heading="Signs & Symptoms"
            subHeading={signsRecommendations}
          />

          <ol className="list-decimal list-inside space-y-7">
            <UserSubsectionResults
              results={signsAndSymptomsResults}
            />
          </ol>
        </div>
        <div className="pb-10">
          <SectionHeading
            heading="Stressors/Triggers"
            subHeading={triggersRecommendations}
          />

          <ol className="list-decimal list-inside space-y-7">
            <UserSubsectionResults
              results={triggersResults}
            />
          </ol>
        </div>
        <div className="pb-10">
          <SectionHeading
            heading="Risk Factors"
            subHeading={riskFactorsRecommendations}
          />

          <ol className="list-decimal list-inside space-y-7">
            <UserSubsectionResults
              results={riskFactorsResults}
            />
          </ol>
        </div>
        <div className="pb-10">
          <SectionHeading
            heading="Support Systems"
            subHeading={supportSystemsRecommendations}
          />

          <ol className="list-decimal list-inside space-y-7">
            <UserSubsectionResults
              results={supportSystemsResults}
            />
          </ol>
        </div>
      </div>
    </>
  );
};
