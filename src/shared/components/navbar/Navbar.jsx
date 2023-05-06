import React from 'react';
import './Navbar.styles.css';
import { IconButton } from '@mui/material';
import { AiOutlineLeft } from 'react-icons/ai';
import { logo } from '../../../assets/images';

export const Navbar = ({ showBackButton, showLogo }) => {
	return (
		<div className="nav-container">
			<div>
				{showBackButton && (
					<IconButton size="small" style={{ background: '#BCBEC0' }}>
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
