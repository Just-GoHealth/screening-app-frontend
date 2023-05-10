import { Button } from '@mui/material';
import React from 'react';
import { Navbar } from '../../shared/components/navbar/Navbar';
import Profile from './medical-profile/Profile';
import './Screening.styles.css';

export const ScreeningPage = () => {
	return (
		<>
			<>
				<Navbar showLogo />
			</>

			<div className="grid grid-cols-5 max-w-7xl mx-auto">
				<nav className="col-span-1 flex justify-center lg:py-10 h-[90vh]">
					<div className="flex flex-col justify-between items-center">
						<div className="space-y-5 text-[#F1ADB0] text-lg">
							<h2 className="text-black font-bold text-xl">GUIDE:</h2>
							<h3>Medical Profile</h3>
							<h3>Symptoms</h3>
							<h3>Emotional State</h3>
							<h3>Coping Strategies</h3>
							<h3>Life Events</h3>
							<h3>Recommendation</h3>
						</div>

						<div className="text-[#99B3DD] space-y-3 flex flex-col items-center">
							<Button
								sx={{
									backgroundColor: '#DAE7F6',
									color: '#9FB9E0',
									border: '2px solid #92AEDB',
									fontWeight: 'bold',
									textTransform: 'none',
									fontSize: '0.9rem',
								}}
								disableElevation
							>
								Start Screening
							</Button>
							<Button
								sx={{
									color: '#92AEDB',
									textTransform: 'none',
									fontWeight: 'bold',
									fontSize: '0.9rem',
								}}
							>
								View Health Records {'>'}
							</Button>
						</div>
					</div>
				</nav>

				<main className="col-span-4 min-h-[90vh]">
					<Profile />
				</main>
			</div>
		</>
	);
};
