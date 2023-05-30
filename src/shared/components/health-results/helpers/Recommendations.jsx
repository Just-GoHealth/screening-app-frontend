import React, { useEffect } from 'react';

export const Recommendations = ({ recommendation }) => {
	return (
		<>
			<div className="relative">
				<div className="absolute left-[-50px] top-3">
					{recommendation?.icon}
				</div>
				<div>
					<h1 className="text-xl text-[#955AA4]">
						{recommendation?.title} - {recommendation?.value} (
						{recommendation.scoring.percentage}%)
					</h1>
					<h4>{recommendation?.body}</h4>
				</div>
			</div>
		</>
	);
};
