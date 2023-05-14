import React from 'react';
import './Navbar.styles.css';
import { IconButton } from '@mui/material';
import { AiOutlineLeft } from 'react-icons/ai';
import { logo } from '../../../assets/images';
import { useInAppNavigation } from '../../custom-hooks/useInAppNavigation';

export const Navbar = ({ showBackButton, showLogo }) => {
	const { handleGoBack } = useInAppNavigation();

	return (
		<div className="nav-container">
			<div>
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

			<div>
				{showLogo && (
					<img src={logo} alt="Just Go Health Logo" className="h-8 sm:h-10" />
				)}
			</div>
		</div>
	);
};
