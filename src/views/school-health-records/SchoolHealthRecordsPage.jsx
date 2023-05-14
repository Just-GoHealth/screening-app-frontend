import React from 'react';
import { IconButton } from '@mui/material';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import { HealthRecordsNavBar } from '../../shared/components/health-records-header';
import './SchoolHealthRecords.styles.css';
import {
	GridComponent,
	GridUserDownloadAction,
	GridUserNameRenderer,
} from '../../shared/components/grid-component';
import { useFetchDetials, useInAppNavigation } from '../../shared/custom-hooks';

export const SchoolHealthRecordsPage = () => {
	const { handleGoBack, params } = useInAppNavigation();
	const schoolId = params.schoolId;

	const { data: schoolData } = useFetchDetials(
		['school-details', schoolId],
		`http://localhost:8900/schools/${schoolId}`
	);
	const schoolName = schoolData?.school.school_name;
	const numberOfStudents = schoolData?.students.length
		? schoolData.students.length +
		  `${schoolData.students.length > 1 ? ' Students' : ' Student'}`
		: '0 Students';

	return (
		<div className="health-records-container">
			<HealthRecordsNavBar
				heading={schoolName}
				onLeftIconClick={handleGoBack}
				rightIcon={
					<IconButton style={{ background: '#BCBEC0' }}>
						<BsFillCloudArrowDownFill color="white" />
					</IconButton>
				}
			/>

			<div className="health-records-sub-heading">
				<h4>Junior High Schoolxx</h4>
				<div>|</div>
				<h4>{numberOfStudents}</h4>
			</div>

			<GridComponent
				searchplaceholder="Search for Student"
				fetchUrl={`http://localhost:8900/schools/${schoolId}`}
				columnDefs={[
					{ field: 'number', headerName: '#', flex: 1 },
					{
						field: 'name',
						headerName: 'Name',
						cellRenderer: GridUserNameRenderer,
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
