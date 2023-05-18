import React from 'react';

export const SectionHeading = ({
	heading,
	subHeading,
	showSeparator = true,
}) => {
	return (
		<div className="mb-2">
			<span className="health-summary-section-heading">
				{heading}
				{showSeparator && <>-</>}
			</span>{' '}
			{subHeading && (
				<span className="health-summary-section-sub-heading">{subHeading}</span>
			)}
		</div>
	);
};
