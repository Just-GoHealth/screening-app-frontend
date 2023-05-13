import { TextField } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';
import React, { useContext } from 'react';
import { GridContext } from './GridComponent';

export const GridSearch = ({ placeholder }) => {
	const { gridApi } = useContext(GridContext);

	const onFilterTextChange = (searchText) => {
		gridApi.setQuickFilter(searchText);
	};
	return (
		<div className="health-records-search-input">
			<TextField
				onChange={(e) => onFilterTextChange(e.target.value)}
				label={
					<div className="health-records-search-input-placeholder">
						<AiOutlineSearch style={{ width: '2rem', height: '2rem' }} />
						<p>{placeholder}</p>
					</div>
				}
				InputProps={{
					sx: {
						'& fieldset': {
							borderRadius: '50px',
							borderColor: 'black',
						},
					},
				}}
				className="w-3/4 lg:w-2/4"
			/>
		</div>
	);
};
