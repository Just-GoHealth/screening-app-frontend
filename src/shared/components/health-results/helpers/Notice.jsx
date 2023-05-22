import React from 'react';
import { FcAdvertising } from 'react-icons/fc';

export const Notice = () => {
	return (
		<div>
			<div>
				<h1 className="health-summary-section-heading mb-2">
					Important Notice
				</h1>

				<div className="relative">
					<div className="absolute left-[-50px] top-3">
						<FcAdvertising className="w-10 h-10" />
					</div>
					<h4>
						These screening results are not a medical diagnosis. You can consult
						with a healthcare professional for further assessment. Check the
						following pages for the answers you gave for each question.
					</h4>
				</div>
			</div>
		</div>
	);
};
