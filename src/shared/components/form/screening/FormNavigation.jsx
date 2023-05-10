import React from 'react';
import { Button, IconButton } from '@mui/material';
import { AiOutlineLeft } from 'react-icons/ai';

const styles = {
	nextButton: {
		backgroundColor: '#DAE7F6',
		color: '#9FB9E0',
		border: '2px solid #92AEDB',
		fontWeight: 'bold',
		fontSize: '0.9rem',
	},
};

export const FormNavigation = ({
	onPreviousPageClick,
	onNextPageClick,
	user,
}) => {
	return (
		<nav className="flex items-center justify-between">
			<>
				<IconButton
					onClick={onPreviousPageClick}
					size="small"
					style={{ background: '#BCBEC0' }}
				>
					<AiOutlineLeft color="white" />
				</IconButton>
			</>

			<h2 className="health-records-nav-heading text-[#F1ADB0]">{user}</h2>

			<>
				<Button
					sx={styles.nextButton}
					disableElevation
					onClick={onNextPageClick}
				>
					Next {'>'}
				</Button>
			</>
		</nav>
	);
};
