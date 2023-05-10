import React from 'react';
import '../Screening.styles.css';
import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import {
	FormNavigation,
	QuestionField,
} from '../../../shared/components/form/screening';

const styles = {
	squareRadioButton: {
		border: '2px solid #ACAEB0',
		color: '#ACAEB0',
		borderRadius: '10px',
		width: '3rem',
		height: '2.5rem',
	},
	circularRadioButton: {
		border: '2px solid #ACAEB0',
		color: '#ACAEB0',
		borderRadius: '50%',
		width: '2.5rem',
		height: '2.5rem',
	},
};

const ageOptions = [
	'10',
	'11',
	'12',
	'13',
	'14',
	'15',
	'16',
	'17',
	'18',
	'19+',
];

const Profile = () => {
	return (
		<div className="px-5 pb-5">
			<h1 className="screening_heading">Medical Profile</h1>

			<form className="space-y-7">
				<QuestionField
					title={'Full Name.'}
					subtitle={'What is your full name?'}
					control={
						<>
							<TextField size="small" fullWidth />
						</>
					}
				/>

				<QuestionField
					title={'Age.'}
					subtitle={'How old are you?'}
					control={
						<>
							<ToggleButtonGroup exclusive aria-label="gender">
								{ageOptions.map((age) => (
									<ToggleButton
										value={age}
										style={{
											...styles.circularRadioButton,
											marginRight: '0.5rem',
										}}
									>
										{age}
									</ToggleButton>
								))}
							</ToggleButtonGroup>
						</>
					}
				/>

				<QuestionField
					title={'Gender.'}
					subtitle={'Your biological gender.'}
					control={
						<>
							<ToggleButtonGroup exclusive aria-label="gender">
								<ToggleButton value={'M'} style={styles.squareRadioButton}>
									M
								</ToggleButton>
								<ToggleButton
									value={'F'}
									style={{ ...styles.squareRadioButton, marginLeft: '0.5rem' }}
								>
									F
								</ToggleButton>
							</ToggleButtonGroup>
						</>
					}
				/>

				<QuestionField
					title={'Location.'}
					subtitle={'Where do you stay?'}
					control={
						<>
							<TextField size="small" fullWidth />
						</>
					}
				/>

				<FormNavigation user={'Lucas Hernandez'} />
			</form>
		</div>
	);
};

export default Profile;
