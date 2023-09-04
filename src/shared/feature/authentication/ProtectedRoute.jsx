import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';

export const ProtectedRoute = ({ page }) => {
	const { userData } = useContext(AuthContext);

	return userData ? (
		page
	) : (
		<Navigate to="/access-health-records" replace />
	);
};
