import React from 'react';
import { IconButton, TextField } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import { HealthRecordsNavBar } from '../../shared/components/health-records-header';
import './SchoolHealthRecords.styles.css';
import { GridComponent } from '../../shared/components/grid-component';
import { useInAppNavigation } from '../../shared/custom-hooks/useInAppNavigation';

export const SchoolHealthRecordsPage = () => {
	const { handleGoBack, handleAddSchool } = useInAppNavigation();

	return (
		<div className="health-records-container">
			<HealthRecordsNavBar
				heading={'Noble Preparatory Academy'}
				onLeftIconClick={handleGoBack}
				rightIcon={
					<IconButton
						onClick={handleAddSchool}
						style={{ background: '#BCBEC0' }}
					>
						<BsFillCloudArrowDownFill color="white" />
					</IconButton>
				}
			/>

			<div className="health-records-sub-heading">
				<h4>Junior High School</h4>
				<div>|</div>
				<h4>150 Students</h4>
			</div>

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
				columnDefs={[
					{ field: '#', flex: 1 },
					{ field: 'name' },
					{ field: 'recommendation' },
					{ field: 'date' },
				]}
			/>
		</div>
	);
};
