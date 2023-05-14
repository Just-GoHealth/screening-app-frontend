import React, { createContext, useCallback, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './grid.styles.css';
import { GridSearch } from './GridSearch';

export const GridContext = createContext();

export const GridComponent = ({ columnDefs, fetchUrl, searchplaceholder }) => {
	const [gridApi, setGridApi] = useState(null);
	const [gridColumnApi, setGridColumnApi] = useState(null);

	const gridOptions = {
		columnDefs,
		defaultColDef: {
			sortable: true,
			resizable: true,
			filter: true,
			flex: 2,
			cellStyle: {
				whiteSpace: 'normal',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				textAlign: 'center',
			},
		},
		animateRows: true,
	};

	const onGridReady = useCallback((params) => {
		setGridApi(params.api);
		setGridColumnApi(params.columnApi);
		{
			fetchUrl === 'http://localhost:8900/schools' &&
				fetch(`${fetchUrl}`)
					.then((res) => res.json())
					.then((res) => res.school_list)
					.then((res) => {
						res.forEach((data, i) => {
							data.number = i + 1;
						});

						return res;
					})
					.then((res) => {
						params.api.applyTransaction({ add: res });
					})
					.catch((err) => console.log('Error fetching data:', err));
		}
		{
			fetchUrl !== 'http://localhost:8900/schools' &&
				fetch(`${fetchUrl}`)
					.then((res) => res.json())
					.then((res) => res.students)
					.then((res) => {
						res.forEach((data, i) => {
							data.number = i + 1;
						});

						return res;
					})
					.then((res) => {
						params.api.applyTransaction({ add: res });
					})
					.catch((err) => console.log('Error fetching data:', err));
		}
	}, []);

	return (
		<GridContext.Provider value={{ gridApi, gridColumnApi }}>
			<GridSearch placeholder={searchplaceholder} />

			<div className="my-grid-container ag-theme-alpine">
				<AgGridReact
					gridOptions={gridOptions}
					onGridReady={onGridReady}
				></AgGridReact>
			</div>
		</GridContext.Provider>
	);
};
