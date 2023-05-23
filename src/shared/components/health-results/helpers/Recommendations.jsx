import React from 'react';

export const Recommendations = ({ title, subTitle, body, icon }) => {
	return (
		<>
			<div className="relative">
				<div className="absolute left-[-50px] top-3">{icon}</div>
				<div>
					<h1 className="text-xl text-[#955AA4]">
						{title} {subTitle && <span>{subTitle}</span>}
					</h1>
					<h4>{body}</h4>
				</div>
			</div>
		</>
	);
};
