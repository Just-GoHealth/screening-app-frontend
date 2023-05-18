import React from 'react';

export const GroupSignTag = ({ signResult, number }) => {
	return (
		<span>
			<span className="bg-[#965AA4] text-white px-5 rounded-full">
				{signResult}
			</span>
			<span className="text-[#965AA4] font-semibold">({number})</span>
		</span>
	);
};
