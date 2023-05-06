import React from 'react';
import { HealthRecordsNavBar } from '../../shared/components/health-records-header';

import { Button } from '@mui/material';
import { AiOutlinePlus } from 'react-icons/ai';

export const HealthRecordsPage = () => {
	return (
		<div>
			<HealthRecordsNavBar
				heading={'JustGo Health Records'}
				leftIcon={
					<Button
						variant="contained"
						disableElevation
						color="secondary"
						startIcon={<AiOutlinePlus />}
						size="small"
					>
						<p className="capitalize font-bold lg:text-lg">New School</p>
					</Button>
				}
			/>
		</div>
	);
};
