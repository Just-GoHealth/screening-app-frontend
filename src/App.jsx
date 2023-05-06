import React from 'react';
import { HealthRecordsPage } from './views/health-records/HealthRecordsPage';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './views/home/HomePage';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/health-records" element={<HealthRecordsPage />} />
			</Routes>
		</>
	);
};

export default App;
