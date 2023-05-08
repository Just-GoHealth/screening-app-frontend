import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './views/home/HomePage';
import { SchoolHealthRecordsPage } from './views/school-health-records/SchoolHealthRecordsPage';
import { SchoolHealthSummaryPage } from './views/school-health-summary/SchoolHealthSummaryPage';
import { UserHealthSummaryPage } from './views/user-health-summary';
import { AllHealthRecordsPage } from './views/all-health-records';
import { PageNotFoundPage } from './views/page-not-found';
import { AccessHealthRecords } from './views/access-health-records/AccessHealthRecords';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/access-health-records" element={<AccessHealthRecords />}></Route>
				<Route path="/all-health-records" element={<AllHealthRecordsPage />} />
				<Route
					path="/school-health-records"
					element={<SchoolHealthRecordsPage />}
				/>
				<Route
					path="/school-health-summary"
					element={<SchoolHealthSummaryPage />}
				/>
				<Route
					path="/user-health-summary"
					element={<UserHealthSummaryPage />}
				/>

				<Route path="*" element={<PageNotFoundPage />} />
			</Routes>
		</>
	);
};

export default App;
