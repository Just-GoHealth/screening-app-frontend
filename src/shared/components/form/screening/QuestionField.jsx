import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export const QuestionField = ({ title, subtitle, control }) => {
	return (
		<>
			<div className="pb-4 border-b border-[#D9DADC] flex space-x-10 items-center">
				<div className="w-3/4 space-y-2">
					<div className="flex items-end space-x-2">
						<h2 className="font-bold text-2xl text-[#231F20]">{title}</h2>
						<h3 className="text-lg text-gray-500">{subtitle}</h3>
					</div>

					<>{control}</>
				</div>

				<div className="bg-[#E6E7E8] relative text-[#86888B] p-3 flex items-center space-x-5 max-w-[15rem]">
					<AiOutlinePlusCircle className="w-5 h-5 absolute top-2 right-2" />

					<div className="bg-gray-800 h-[80%] w-2/5"></div>

					<h4 className="text-sm">
						Watch our medical experts to help decide your routine
					</h4>
				</div>
			</div>
		</>
	);
};
