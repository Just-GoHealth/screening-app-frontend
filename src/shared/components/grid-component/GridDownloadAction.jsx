import React from 'react';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

export const GridDownloadAction = ({ onActionClick }) => {
	return (
		<div style={{ verticalAlign: 'middle' }}>
			<div onClick={onActionClick}>
				<ExpandCircleDownOutlinedIcon className="text-gray-400" />
			</div>
		</div>
	);
};
