import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ page }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return isAuthenticated ? (
		page
	) : (
		<Navigate to="/access-health-records" replace />
	);
};
