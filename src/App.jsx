import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './views/home/HomePage';
import { HealthRecordsPage } from './views/health-records/HealthRecordsPage';
import { SchoolHealthRecords } from './views/school-health-records/SchoolHealthRecords';
import { SchoolHealthSummary } from './views/school-health-summary/SchoolHealthSummary';
import { UserHealthSummary } from './views/user-health-summary';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/health-records" element={<HealthRecordsPage />} />
				<Route
					path="/school-health-records"
					element={<SchoolHealthRecords />}
				/>
				<Route
					path="/school-health-summary"
					element={<SchoolHealthSummary />}
				/>
				<Route path="/user-health-summary" element={<UserHealthSummary />} />
			</Routes>
		</>
	);
};

export default App;
