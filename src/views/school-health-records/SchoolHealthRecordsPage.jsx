import React from 'react';
import { IconButton } from '@mui/material';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import { HealthRecordsNavBar } from '../../shared/components/health-records-header';
import {
	GridComponent,
	GridUserDownloadAction,
} from '../../shared/components/grid-component';
import { useFetchDetials, useInAppNavigation } from '../../shared/custom-hooks';
import './SchoolHealthRecords.styles.css';

export const SchoolHealthRecordsPage = () => {
	const { handleGoBack, params, navigate } = useInAppNavigation();
	const schoolId = params.schoolId;

	const { data = {} } = useFetchDetials(
		['school-details', schoolId],
		`http://localhost:8900/schools/${schoolId}`
	);
	const { schoolData = {} } = data;
	const { school, students } = schoolData;

	const schoolName = school?.school_name;
	const schoolType = school?.school_type;
	const numberOfStudents = students?.length
		? students?.length + `${students?.length > 1 ? ' Students' : ' Student'}`
		: '0 Students';

	const handleSchoolRecordsDownload = () => {
		navigate(`/school-health-summary/${schoolId}`);
	};

	return (
		<div className="health-records-container">
			<HealthRecordsNavBar
				heading={schoolName}
				onLeftIconClick={handleGoBack}
				rightIcon={
					<IconButton
						onClick={handleSchoolRecordsDownload}
						style={{ background: '#BCBEC0' }}
					>
						<BsFillCloudArrowDownFill color="white" />
					</IconButton>
				}
			/>

			<div className="health-records-sub-heading">
				<h4>{schoolType}</h4>
				<div>|</div>
				<h4>{numberOfStudents}</h4>
			</div>

			<div className="h-[435px]">
				<GridComponent
					searchplaceholder="Search for Student"
					fetchUrl={`http://localhost:8900/schools/${schoolId}`}
					columnDefs={[
						{ field: 'number', headerName: '#', flex: 1 },
						{
							field: 'full_name',
							headerName: 'Name',
						},
						{
							field: 'mental_health_recommendation',
							headerName: 'Recommendation',
						},
						{
							field: 'updatedAt',
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
		</div>
	);
};
