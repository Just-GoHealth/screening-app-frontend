import React from 'react';
import './Navbar.styles.css';
import { IconButton } from '@mui/material';
import { AiOutlineLeft } from 'react-icons/ai';
import { logo } from '../../../assets/images';
import { useInAppNavigation } from '../../custom-hooks/useInAppNavigation';

export const Navbar = ({ showBackButton, showLogo, showRecommendations }) => {
	const { handleGoBack } = useInAppNavigation();

	return (
		<div className={showRecommendations ? "flex gap-x-10 h-[10vh] " :"nav-container"}>
			<div className={showRecommendations ? 'basis-[20%] pl-20 ': ''}>
				{showBackButton && (
					<IconButton
						onClick={handleGoBack}
						size="small"
						style={{ background: '#BCBEC0' }}
					>
						<AiOutlineLeft color="white" />
					</IconButton>
				)}
			</div>

			<div className={showRecommendations ? 'flex-grow-2 basis-[80%] bg-[#DAE7F6] pr-20 py-[2.4vh]' : ''}>
				{showLogo && (
					<img src={logo} alt="Just Go Health Logo" className="h-8 sm:h-10 float-right" />
				)}
			</div>
		</div>
	);
};
