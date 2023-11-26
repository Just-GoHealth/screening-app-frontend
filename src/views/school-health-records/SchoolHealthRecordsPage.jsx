import { IconButton, Skeleton } from '@mui/material';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import { HealthRecordsNavBar } from '../../shared/components/health-records-header';
import {
	EllipsisRenderer,
	GridComponent,
	GridUserDownloadAction,
	GridUserNameRenderer,
} from '../../shared/components/grid-component';
import { useFetchDetials, useInAppNavigation } from '../../shared/custom-hooks';
import './SchoolHealthRecords.styles.css';

export const SchoolHealthRecordsPage = () => {
	const { handleGoBack, params, navigate } = useInAppNavigation();
	const schoolId = params.schoolId;

	const { data = {} } = useFetchDetials(
		['school-details', schoolId],
		`https://screening-tool-api.onrender.com/schools/${schoolId}`
	);
	const { school_data = {}} = data;
	const { school, students } = school_data;

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

			{schoolType ? (
				<div className="health-records-sub-heading">
					<h4>{schoolType}</h4>
					<span> | </span>
					<h4>{numberOfStudents}</h4>
				</div>
			) : (
				<div className="flex justify-center">
					<Skeleton
						variant="rectangular"
						width={250}
						height={15}
						className="rounded-full"
					/>
				</div>
			)}

			<div className="h-[435px]">
				<GridComponent
					searchplaceholder="Search for Student"
					fetchUrl={`https://screening-tool-api.onrender.com/schools/${schoolId}`}
					columnDefs={[
						{ field: 'number', headerName: '#', flex: 1 },
						{
							field: 'full_name',
							headerName: 'Name',
							cellRenderer: GridUserNameRenderer,
							autoHeight: true,
						},
						{
							field: 'student_recommendation',
							headerName: 'Recommendation',
							cellRenderer: EllipsisRenderer,
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
							sort: 'desc',
						},
						{
							field: 'download',
							headerName: 'Download',
							cellRenderer: GridUserDownloadAction,
						},
					]}
				/>
			</div>
		</div>
	);
};
