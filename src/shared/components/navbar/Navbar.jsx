import React from 'react';
import { IconButton } from '@mui/material';
import { AiOutlineLeft } from 'react-icons/ai';
import { logo } from '../../../assets/images';
import { useInAppNavigation } from '../../custom-hooks/useInAppNavigation';
import './Navbar.styles.css';

export const Navbar = ({
	showBackButton,
	showLogo,
	showRecommendations,
	className,
}) => {
	const { handleGoBack, handleGoHome } = useInAppNavigation();

	return (
		<div
			className={`${
				showRecommendations ? 'flex gap-x-10 h-[10vh] ' : 'nav-container'
			} ${className}`}
		>
			<div className={showRecommendations ? 'basis-[20%] pl-20 ' : ''}>
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

			<div
				className={
					showRecommendations
						? 'flex-grow-2 basis-[80%] bg-[#DAE7F6] pr-20 py-[2.4vh]'
						: ''
				}
			>
				{showLogo && (
					<img
						src={logo}
						alt="Just Go Health Logo"
						onClick={handleGoHome}
						className="h-8 sm:h-10 float-right hover:cursor-pointer"
					/>
				)}
			</div>
		</div>
	);
};
