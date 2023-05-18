import React from 'react';

export const GroupSign = ({ sign, number }) => {
	return (
		<span>
			{sign} <span className="font-bold">({number}).</span>
		</span>
	);
};
