import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/auth/AuthContext';

export const ProtectedRoute = ({ page }) => {
	const { user } = useAuthContext();

	return user.userToken ? (
		page
	) : (
		<Navigate to="/access-health-records" replace />
	);
};
