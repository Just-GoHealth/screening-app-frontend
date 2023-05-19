import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';

export const ProtectedRoute = ({ page }) => {
	const { isAuthenticated } = useContext(AuthContext);

	return isAuthenticated ? (
		page
	) : (
		<Navigate to="/access-health-records" replace />
	);
};
