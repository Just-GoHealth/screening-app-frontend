import { Button } from '@mui/material';
import { AiOutlinePlus } from 'react-icons/ai';
import { HealthRecordsNavBar } from '../../shared/components/health-records-header';
import {
	GridComponent,
	GridSchoolDownloadAction,
	GridSchoolNameRenderer,
} from '../../shared/components/grid-component';
import { useInAppNavigation } from '../../shared/custom-hooks/useInAppNavigation';
import './AllHealthRecordsPage.styles.css';

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

			<div className="h-[465px]">
				<GridComponent
					searchplaceholder="Search for School"
					fetchUrl="https://screening-tool-api.onrender.com/schools"
					columnDefs={[
						{ field: 'number', headerName: '#', flex: 1 },
						{
							field: 'school_name',
							headerName: 'School',
							cellRenderer: GridSchoolNameRenderer,
							autoHeight: true,
						},
						{
							field: 'studentPopulation',
							headerName: 'Students',
						},
						{
							field: 'updatedAt',
							headerName: 'Date',
							valueFormatter: function (params) {
								const date = new Date(params.value);
								const month = date.toLocaleString('en-US', {
									month: 'short',
								});
								const day = date.getDate();

								return month + ' ' + day;
							},
							sort: 'desc',
							flex: 1,
						},
						{
							field: 'download',
							headerName: 'Download',
							cellRenderer: GridSchoolDownloadAction,
						},
					]}
				/>
			</div>
		</div>
	);
};
