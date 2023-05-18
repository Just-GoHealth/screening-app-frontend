import { useInAppNavigation } from '../../../custom-hooks/useInAppNavigation';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

export const GridSchoolNameRenderer = ({ value, data }) => {
	const { navigate } = useInAppNavigation();

	const handleClick = () => {
		navigate(`/school-health-records/${data._id}`);
	};

	return (
		<div
			onClick={handleClick}
			className="hover:underline hover:text-[#1D509E] cursor-pointer transition-all duration-300 ease-out"
		>
			{value}
		</div>
	);
};

export const GridUserNameRenderer = ({ data }) => {
	const { navigate } = useInAppNavigation();

	const firstName = data.first_name;
	const lastName = data.last_name;
	const value = firstName + ' ' + lastName;

	const handleClick = () => {
		navigate(`/user-health-summary/${data._id}`);
	};

	return <div>{value}</div>;
};

export const GridSchoolDownloadAction = ({ data }) => {
	const { navigate } = useInAppNavigation();

	const handleClick = () => {
		navigate(`/school-health-summary/${data._id}`);
	};

	return (
		<div style={{ verticalAlign: 'middle' }}>
			<div onClick={handleClick}>
				<ExpandCircleDownOutlinedIcon className="grid-download-button" />
			</div>
		</div>
	);
};

export const GridUserDownloadAction = ({ data }) => {
	const { navigate } = useInAppNavigation();

	const handleClick = () => {
		navigate(`/user-health-summary/${data._id}`);
	};

	return (
		<div style={{ verticalAlign: 'middle' }}>
			<div onClick={handleClick}>
				<ExpandCircleDownOutlinedIcon className="grid-download-button" />
			</div>
		</div>
	);
};
