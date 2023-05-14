import React from 'react';
import { IconButton } from '@mui/material';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import { HealthRecordsNavBar } from '../../shared/components/health-records-header';
import './SchoolHealthRecords.styles.css';
import {
	GridComponent,
	GridUserDownloadAction,
} from '../../shared/components/grid-component';
import { useInAppNavigation } from '../../shared/custom-hooks/useInAppNavigation';

export const SchoolHealthRecordsPage = () => {
	const { handleGoBack } = useInAppNavigation();

	return (
		<div className="health-records-container">
			<HealthRecordsNavBar
				heading={'Noble Preparatory Academy'}
				onLeftIconClick={handleGoBack}
				rightIcon={
					<IconButton style={{ background: '#BCBEC0' }}>
						<BsFillCloudArrowDownFill color="white" />
					</IconButton>
				}
			/>

			<div className="health-records-sub-heading">
				<h4>Junior High School</h4>
				<div>|</div>
				<h4>150 Students</h4>
			</div>

			<GridComponent
				searchplaceholder="Search for Student"
				fetchUrl="http://localhost:8900/students"
				columnDefs={[
					{ field: 'number', headerName: '#', flex: 1 },
					{
						field: 'name',
						headerName: 'Name',
						valueGetter: function (params) {
							const firstName = params.data.first_name;
							const lastName = params.data.last_name;

							return firstName + ' ' + lastName;
						},
					},
					{ field: 'recommendation' },
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
					{
						field: 'download_school',
						headerName: 'Download',
						cellRenderer: GridUserDownloadAction,
					},
				]}
			/>
		</div>
	);
};
