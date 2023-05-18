import React from 'react';
import { FcSearch } from 'react-icons/fc';

export const Recommendations = ({ subTitle }) => {
	return (
		<>
			<div className="relative">
				<div className="absolute left-[-50px] top-3">
					<FcSearch className="w-10 h-10" />
				</div>
				<div>
					<h1 className="text-xl text-[#955AA4]">
						Workshop {subTitle && <span>{subTitle}</span>}
					</h1>
					<h4>
						Participate in group talk therapy and learn mindfulness techniques
						to effectively manage stress.
					</h4>
				</div>
			</div>
		</>
	);
};
