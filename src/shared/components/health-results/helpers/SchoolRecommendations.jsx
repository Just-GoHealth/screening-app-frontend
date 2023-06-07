import React from 'react';

export const SchoolRecommendations = ({ recommendation }) => {
	return (
		<>
			<div className="relative text-[1rem] md:text-lg">
				<div className="lg:absolute lg:left-[-50px] lg:top-3">
					{recommendation?.icon}
				</div>
				<div>
					<h1 className="text-lg md:text-xl text-[#955AA4]">
						{recommendation?.title} - {recommendation?.scoring[0]} (
						{recommendation.scoring[1]}%)
					</h1>
					<h4>{recommendation?.body}</h4>
				</div>
			</div>
		</>
	);
};
