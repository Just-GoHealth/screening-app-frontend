import React from 'react';
import { Button, TextField } from '@mui/material';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import { HealthRecordsNavBar } from '../../shared/components/health-records-header';
import './AllHealthRecordsPage.styles.css';
import { GridComponent } from '../../shared/components/grid-component';
import { useInAppNavigation } from '../../shared/custom-hooks/useInAppNavigation';

export const AllHealthRecordsPage = () => {
	const { handleGoBack, handleAddSchool } = useInAppNavigation();

	return (
		<div className="health-records-container">
			<HealthRecordsNavBar
				heading={'JustGo Health Records'}
				onLeftIconClick={handleGoBack}
				rightIcon={
					<Button
						variant="contained"
						disableElevation
						color="secondary"
						startIcon={<AiOutlinePlus />}
						size="small"
						onClick={handleAddSchool}
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

			<GridComponent
				fetchUrl="http://localhost:8900/schools"
				columnDefs={[
					{ field: 'number', headerName: '#', flex: 1 },
					{ field: 'school_name', headerName: 'School' },
					{ field: 'students' },
					{
						field: 'createdAt',
						headerName: 'Date',
						valueFormatter: function (params) {
							const date = new Date(params.value);
							const month = date.toLocaleString('en-US', { month: 'short' });
							const day = date.getDate();

							return month + ' ' + day;
						},
					},
				]}
			/>
		</div>
	);
};
