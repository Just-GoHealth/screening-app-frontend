import React, { useState } from 'react';
import { AccessAndAdd } from '../../shared/components/access-add/AccessAndAdd';
import { Box, Button, MenuItem, TextField } from '@mui/material';
import { useInAppNavigation } from '../../shared/custom-hooks/useInAppNavigation';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AddNewSchool = () => {
	const [schoolName, setSchoolName] = useState('');
	const [schoolLocation, setSchooLocation] = useState('');
	const [schoolType, setSchoolType] = useState('');
	const [coordinator, setCoordinator] = useState('');
	const [mobile, setMobile] = useState('');
	const [email, setEmail] = useState('');
	const { handleGoBack, navigate } = useInAppNavigation();

	const handleValidation = (
		school_name,
		school_location,
		school_type,
		coordinator,
		mobile,
		email
	) => {
		if (school_name === '') {
			return false;
		} else if (school_location === '') {
			return false;
		} else if (school_type === '') {
			return false;
		} else if (coordinator === '') {
			return false;
		} else if (mobile === '') {
			return false;
		} else if (email === '') {
			return false;
		} else {
			return true;
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		const school_name = schoolName;
		const school_location = schoolLocation;
		const school_type = schoolType;

		if (
			handleValidation(
				school_name,
				school_location,
				school_type,
				coordinator,
				mobile,
				email
			)
		) {
			await axios
				.post('http://localhost:8900/add-school', {
					school_name,
					school_location,
					school_type,
					coordinator,
					mobile,
					email,
				})
				.then((res) => {
					toast.success(res.data.message);
					navigate('/all-health-records');
				})
				.catch((err) => toast.error('Something went wrong. Try Again'));
		} else {
			toast.error('Make sure you fill all fields.');
		}
	};

	const schoolTypes = [
		{
			value: 'Primary School',
			label: 'Primary School',
		},
		{
			value: 'Junior High School',
			label: 'Junior High School',
		},
		{
			value: 'Senior High School',
			label: 'Senior High School',
		},
	];

	return (
		<>
			<div className="flex justify-center items-center min-h-screen">
				<div className="border-8 rounded-xl border-[#993399] p-4 w-72 sm:w-[28rem]">
					<AccessAndAdd
						onLeftIconClick={handleGoBack}
						heading="Add New School"
					/>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="name"
							label="Name"
							name="name"
							autoComplete="name"
							size="small"
							value={schoolName}
							onChange={(e) => setSchoolName(e.target.value)}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="location"
							label="Location"
							name="location"
							autoComplete="location"
							size="small"
							value={schoolLocation}
							onChange={(e) => setSchooLocation(e.target.value)}
						/>
						<TextField
							id="school-select"
							fullWidth
							required
							select
							margin="normal"
							label="School Select"
							defaultValue="Primary School"
							helperText="Please select your school"
							size="small"
							value={schoolType}
							onChange={(e) => setSchoolType(e.target.value)}
						>
							{schoolTypes.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<TextField
							margin="dense"
							required
							fullWidth
							id="coordinator"
							label="Coordinator"
							name="coordinator"
							autoComplete="name"
							size="small"
							value={coordinator}
							onChange={(e) => setCoordinator(e.target.value)}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="contact"
							label="Contact"
							name="contact"
							autoComplete="phone"
							size="small"
							value={mobile}
							onChange={(e) => setMobile(e.target.value)}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email"
							name="email"
							autoComplete="email"
							size="small"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<div className="text-center">
							<Button
								type="submit"
								variant="contained"
								sx={{ mt: 3, mb: 2, px: 10, bgcolor: '#993399' }}
							>
								Continue
							</Button>
						</div>
					</Box>
				</div>
			</div>
		</>
	);
};
