import React from 'react';

export const SchoolRecommendations = ({ recommendation }) => {
	return (
		<>
			<div className="relative">
				<div className="absolute left-[-50px] top-3">
					{recommendation?.icon}
				</div>
				<div>
					<h1 className="text-xl text-[#955AA4]">
						{recommendation?.title} - {recommendation?.scoring[0]} (
						{recommendation.scoring[1]}%)
					</h1>
					<h4>{recommendation?.body}</h4>
				</div>
			</div>
		</>
	);
};
