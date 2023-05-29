import React from 'react';
import { SectionHeading } from '../SectionHeading';
import { UserSubsectionResults } from '../UserSubsectionResults';

export const UserAnswers = ({ student }) => {
	// User Signs and Symptoms
	const signsAndSymptoms = student.signs_and_symptoms;
	const signsOutcome = signsAndSymptoms?.outcome_on_signs_and_symptoms;
	const signsAndSymptomsResults = Object.entries(signsAndSymptoms);

	// Triggers
	const triggers = student.triggers;
	const tirggersOutcome = triggers.outcome_on_triggers;
	const triggersResults = Object.entries(triggers);

	// Risk Factors
	const riskFactors = student.risk_factors;
	const riskFactorsOutcome = riskFactors.outcome_on_risk_factors;
	const riskFactorsResults = Object.entries(riskFactors);

	// Support Systems
	const supportSystems = student.support_systems;
	const supportSystemsOutcome = supportSystems.outcome_on_support_system;
	const supportSystemsResults = Object.entries(supportSystems);

	return (
		<div className="space-y-10">
			<div>
				{/* SIGNS & SYMPTOMS */}
				<SectionHeading heading="Signs & Symptoms" subHeading={signsOutcome} />

				<ol className="list-decimal list-inside space-y-7">
					<UserSubsectionResults results={signsAndSymptomsResults} />
				</ol>
			</div>

			<div>
				{/* TRIGGERS */}
				<SectionHeading heading="Triggers" subHeading={tirggersOutcome} />

				<ol className="list-decimal list-inside space-y-7">
					<UserSubsectionResults results={triggersResults} />
				</ol>
			</div>

			<div>
				{/* RISK FACTORS */}
				<SectionHeading
					heading="Risk Factors"
					subHeading={riskFactorsOutcome}
				/>

				<ol className="list-decimal list-inside space-y-7">
					<UserSubsectionResults results={riskFactorsResults} />
				</ol>
			</div>

			<div>
				{/* SUPPORT SYSTEMS */}
				<SectionHeading
					heading="Support Systems"
					subHeading={supportSystemsOutcome}
				/>

				<ol className="list-decimal list-inside space-y-7">
					<UserSubsectionResults results={supportSystemsResults} />
				</ol>
			</div>
		</div>
	);
};
