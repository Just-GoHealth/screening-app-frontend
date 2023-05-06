import React from 'react';
import { IconButton, TextField } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCloudArrowDown, BsFillCloudArrowDownFill } from 'react-icons/bs';
import { HealthRecordsNavBar } from '../../shared/components/health-records-header';
import { SchoolHealthRecordsTable } from '../../shared/components/health-records-table';
import './SchoolHealthRecords.style.css';

const tableHeadData = ['#', 'Name', 'Recommendation', 'Date', 'Download'];
const tableBodyData = [
	{
		id: 1,
		name: 'Jacob Davis',
		recommendation: 'Workshop',
		date: 'Month Day',
		download: (
			<BsCloudArrowDown style={{ width: '1.5rem', height: '1.5rem' }} />
		),
	},
	{
		id: 2,
		name: 'Jacob Davis',
		recommendation: 'Workshop',
		date: 'Month Day',
		download: (
			<BsCloudArrowDown style={{ width: '1.5rem', height: '1.5rem' }} />
		),
	},
	{
		id: 3,
		name: 'Jacob Davis',
		recommendation: 'Workshop',
		date: 'Month Day',
		download: (
			<BsCloudArrowDown style={{ width: '1.5rem', height: '1.5rem' }} />
		),
	},
	{
		id: 4,
		name: 'Jacob Davis',
		recommendation: 'Workshop',
		date: 'Month Day',
		download: (
			<BsCloudArrowDown style={{ width: '1.5rem', height: '1.5rem' }} />
		),
	},
	{
		id: 5,
		name: 'Jacob Davis',
		recommendation: 'Workshop',
		date: 'Month Day',
		download: (
			<BsCloudArrowDown style={{ width: '1.5rem', height: '1.5rem' }} />
		),
	},
];

export const SchoolHealthRecords = () => {
	return (
		<div className="container">
			<HealthRecordsNavBar
				heading={'Noble Preparatory Academy'}
				leftIcon={
					<IconButton style={{ background: '#BCBEC0' }}>
						<BsFillCloudArrowDownFill color="white" />
					</IconButton>
				}
			/>

			<div className="sub-heading">
				<h4>Junior High School</h4>
				<div>|</div>
				<h4>150 Students</h4>
			</div>

			<div className="search-input">
				<TextField
					label={
						<div className="search-input-placeholder">
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

			<SchoolHealthRecordsTable
				tableBodyData={tableBodyData}
				tableHeadData={tableHeadData}
			/>
		</div>
	);
};
