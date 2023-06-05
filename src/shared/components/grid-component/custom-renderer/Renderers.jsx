import { useEffect } from 'react';
import { useInAppNavigation } from '../../../custom-hooks/useInAppNavigation';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

export const GridSchoolNameRenderer = ({ data, params }) => {
	const { navigate } = useInAppNavigation();
	const schoolName = data.school_name;
	const numberOfStudents = data.student_count;

	const handleClick = () => {
		navigate(`/school-health-records/${data._id}`);
	};

	useEffect(() => {
		if (params && params.node) {
			params.node.setRowHeight(params.rowIndex, params.node.rowHeight);
		}
	}, [params]);

	return (
		<>
			<div
				onClick={handleClick}
				className="hover:underline hover:text-[#1D509E] cursor-pointer transition-all duration-300 ease-out"
			>
				{schoolName}
			</div>
			<div className="block md:hidden">Students: {numberOfStudents}</div>
		</>
	);
};

export const GridUserNameRenderer = ({ data, params }) => {
	const { navigate } = useInAppNavigation();

	const studentName = data.full_name;
	const studentRecommendations = data.student_recommendation?.join(', ');
	const handleClick = () => {
		navigate(`/user-health-summary/${data._id}`);
	};

	useEffect(() => {
		if (params && params.node) {
			params.node.setRowHeight(params.rowIndex, params.node.rowHeight);
		}
	}, [params]);

	return (
		<>
			<div>{studentName}</div>
			<div className="block md:hidden">{studentRecommendations}</div>
		</>
	);
};

export const GridSchoolDownloadAction = ({ data }) => {
	const { navigate } = useInAppNavigation();

	const handleClick = async () => {
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

	const handleClick = async () => {
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
