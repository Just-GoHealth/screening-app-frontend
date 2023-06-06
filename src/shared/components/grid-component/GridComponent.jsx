import React, { createContext, useCallback, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { GridSearch } from './GridSearch';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './grid.styles.css';

export const GridContext = createContext();

export const GridComponent = ({ columnDefs, fetchUrl, searchplaceholder }) => {
	const [gridApi, setGridApi] = useState(null);
	const [gridColumnApi, setGridColumnApi] = useState(null);
	const [isMobileView, setIsMobileView] = useState(false);

	const gridOptions = {
		columnDefs,
		defaultColDef: {
			sortable: true,
			resizable: true,
			flex: 2,
			cellStyle: {
				whiteSpace: 'normal',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				textAlign: 'center',
			},
		},
		animateRows: true,
		pagination: true,
		paginationPageSize: 10,
	};

	const onGridReady = useCallback((params) => {
		setGridApi(params.api);
		setGridColumnApi(params.columnApi);

		if (window.innerWidth <= 768) {
			params.columnApi.getColumn('number').flex = 0.7;
			params.columnApi.getColumn('download').flex = 0.7;
		}

		{
			fetchUrl === 'https://screening-tool-api.onrender.com/schools' &&
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
			fetchUrl !== 'https://screening-tool-api.onrender.com/schools' &&
				fetch(`${fetchUrl}`)
					.then((res) => res.json())
					.then((res) => res.schoolData.students)
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

	const handleResize = () => {
		const mobileView = window.innerWidth <= 768;
		setIsMobileView(mobileView);
	};

	useEffect(() => {
		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if (gridColumnApi) {
			const dateColumn = gridColumnApi.getColumn('updatedAt');
			const studentPopulationColumn =
				gridColumnApi.getColumn('studentPopulation');
			const studentRecommendation = gridColumnApi.getColumn(
				'student_recommendation'
			);
			const number = gridColumnApi.getColumn('number');
			const download = gridColumnApi.getColumn('download');

			dateColumn && gridColumnApi.setColumnVisible('updatedAt', !isMobileView);
			studentPopulationColumn &&
				gridColumnApi.setColumnVisible('studentPopulation', !isMobileView);
			studentRecommendation &&
				gridColumnApi.setColumnVisible('student_recommendation', !isMobileView);

			if (number && download && isMobileView) {
				number.flex = 0.5;
				download.flex = 0.5;
			} else {
				number.flex = 1;
				download.flex = 2;
			}
		}
	}, [gridColumnApi, isMobileView]);

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
