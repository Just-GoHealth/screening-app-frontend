import React from 'react';
import { Button, TextField } from '@mui/material';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import { BsCloudArrowDown } from 'react-icons/bs';
import { HealthRecordsNavBar } from '../../shared/components/health-records-header';
import { HealthRecordsTable } from '../../shared/components/health-records-table';
import './AllHealthRecordsPage.styles.css';

const tableHeadData = ['#', 'School', 'Students', 'Date', 'Download'];
const tableBodyData = [
	{
		id: 1,
		school: 'Noble Prep Academy',
		students: '5000',
		date: 'Month Day',
		download: (
			<BsCloudArrowDown style={{ width: '1.5rem', height: '1.5rem' }} />
		),
	},
	{
		id: 2,
		school: 'Noble Prep Academy',
		students: '5000',
		date: 'Month Day',
		download: (
			<BsCloudArrowDown style={{ width: '1.5rem', height: '1.5rem' }} />
		),
	},
	{
		id: 3,
		school: 'Noble Prep Academy',
		students: '5000',
		date: 'Month Day',
		download: (
			<BsCloudArrowDown style={{ width: '1.5rem', height: '1.5rem' }} />
		),
	},
	{
		id: 4,
		school: 'Noble Prep Academy',
		students: '5000',
		date: 'Month Day',
		download: (
			<BsCloudArrowDown style={{ width: '1.5rem', height: '1.5rem' }} />
		),
	},
	{
		id: 5,
		school: 'Noble Prep Academy',
		students: '5000',
		date: 'Month Day',
		download: (
			<BsCloudArrowDown style={{ width: '1.5rem', height: '1.5rem' }} />
		),
	},
];

export const AllHealthRecordsPage = () => {
	return (
		<div className="health-records-container">
			<HealthRecordsNavBar
				heading={'JustGo Health Records'}
				leftIcon={
					<Button
						variant="contained"
						disableElevation
						color="secondary"
						startIcon={<AiOutlinePlus />}
						size="small"
					>
						<p className="health-records-header-left-button">New School</p>
					</Button>
				}
			/>

			<div className="health-records-search-input">
				<TextField
					label={
						<div className="health-records-search-input-placeholder">
							<AiOutlineSearch style={{ width: '2rem', height: '2rem' }} />
							<p>Search for Student or School</p>
						</div>
					}
					InputProps={{
						sx: {
							'& fieldset': {
								borderRadius: '50px',
								borderColor: 'black',
							},
						},
					}}
					className="w-3/4 lg:w-2/4"
				/>
			</div>

			<HealthRecordsTable
				tableBodyData={tableBodyData}
				tableHeadData={tableHeadData}
			/>
		</div>
	);
};
