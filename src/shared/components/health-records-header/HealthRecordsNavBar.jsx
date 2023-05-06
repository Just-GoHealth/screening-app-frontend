import React from 'react';
import { IconButton } from '@mui/material';
import { AiOutlineLeft } from 'react-icons/ai';
import './HealthRecordsNavBar.styles.css';

export const HealthRecordsNavBar = ({
	onRightIconClick,
	heading,
	leftIcon,
}) => {
	return (
		<nav className="health-records-nav-container">
			<>
				<IconButton
					onClick={onRightIconClick}
					size="small"
					style={{ background: '#BCBEC0' }}
				>
					<AiOutlineLeft color="white" />
				</IconButton>
			</>

			<h2 className="health-records-nav-heading ">{heading}</h2>

			<>{leftIcon}</>
		</nav>
	);
};
