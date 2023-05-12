import React from 'react';
import Logo from '../../../assets/images/logo.png';
import { IconButton } from '@mui/material';
import { AiOutlineLeft } from 'react-icons/ai';

export const AccessAndAdd = ({ onLeftIconClick, heading }) => {
	return (
		<>
			<div className="flex justify-between">
				<IconButton
					onClick={onLeftIconClick}
					size="small"
					style={{ background: '#BCBEC0' }}
					className="self-center"
				>
					<AiOutlineLeft color="white" />
				</IconButton>
				<img src={Logo} alt="JustGo Logo" className=" w-48" />
			</div>
			<div className="text-center font-bold mt-14 px-4">
				<h1 className="text-[#003399] text-2xl lg:text-4xl">{heading}</h1>
			</div>
		</>
	);
};
