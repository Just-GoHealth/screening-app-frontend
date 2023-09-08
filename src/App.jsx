import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './views/home/HomePage';
import { UserHealthSummaryPage } from './views/user-health-summary';
import { AllHealthRecordsPage } from './views/all-health-records';
import { PageNotFoundPage } from './views/page-not-found';
import { ScreeningPage } from './views/screening';
import { SchoolHealthRecordsPage } from './views/school-health-records';
import { SchoolHealthSummaryPage } from './views/school-health-summary';
import { AccessHealthRecords } from './views/access-health-records/AccessHealthRecords';
import { AddNewSchool } from './views/add-new-school/AddNewSchool';
import { ProtectedRoute } from './shared/feature/authentication/ProtectedRoute';
import ManageAccountPage from "./views/manage-account/ManageAccountPage.jsx";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/access-health-records"
					element={<AccessHealthRecords />}
				/>
				<Route
					path="/add-new-school"
					element={<ProtectedRoute page={<AddNewSchool />} />}
				/>
				<Route
					path="/all-health-records"
					element={<ProtectedRoute page={<AllHealthRecordsPage />} />}
				/>
				<Route
					path="/school-health-records/:schoolId"
					element={<ProtectedRoute page={<SchoolHealthRecordsPage />} />}
				/>
				<Route
					path="/school-health-summary/:schoolId"
					element={<ProtectedRoute page={<SchoolHealthSummaryPage />} />}
				/>
				<Route
					path="/user-health-summary/:userId"
					element={<ProtectedRoute page={<UserHealthSummaryPage />} />}
				/>
				<Route
					path="/manage-account"
					element={<ManageAccountPage />}
				/>

				<Route path="/screening" element={<ScreeningPage />} />

				<Route path="*" element={<PageNotFoundPage />} />
			</Routes>

			<ToastContainer
				limit={5}
				position={'bottom-left'}
				autoClose={3000}
				draggable={true}
				pauseOnFocusLoss={false}
			/>
		</>
	);
};

export default App;
