import React from 'react';
import { IconButton } from '@mui/material';
import { AiOutlineLeft } from 'react-icons/ai';
import './HealthRecordsNavBar.styles.css';
import { useInAppNavigation } from '../../custom-hooks';

export const HealthRecordsNavBar = ({
	onLeftIconClick,
	heading,
	rightIcon,
}) => {
	const { handleGoHome } = useInAppNavigation();

	return (
		<nav className="health-records-nav-container">
			<>
				<IconButton
					onClick={onLeftIconClick}
					size="small"
					style={{ background: '#BCBEC0' }}
				>
					<AiOutlineLeft color="white" />
				</IconButton>
			</>

			<h2
				className="health-records-nav-heading cursor-pointer"
				onClick={handleGoHome}
			>
				{heading}
			</h2>

			<>{rightIcon}</>
		</nav>
	);
};
