import React, { useCallback, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { GridDownloadAction } from './GridDownloadAction';
import './grid.styles.css';

export const GridComponent = ({ columnDefs, onDownloadActionClick }) => {
	const [rowData] = useState([
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 },
	]);
	const [gridApi, setGridApi] = useState(null);
	const [gridColumnApi, setGridColumnApi] = useState(null);

	const customActionCellRenderer = (params) => {
		return <GridDownloadAction onActionClick={onDownloadActionClick} />;
	};

	const downloadActionColumn = {
		headerName: 'Download',
		cellRenderer: customActionCellRenderer,
		flex: 2,
		resizable: false,
		cellStyle: { textAlign: 'center' },
	};

	const gridOptions = {
		columnDefs: [...columnDefs, downloadActionColumn],
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
		fetch('http://localhost:8900/schools', {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				console.log({ res });
			})
			.then((res) => {
				params.api.applyTransaction({ add: res });
			})
			.catch((err) => console.log('Error fetching data:', err));
	}, []);

	return (
		<div className="my-grid-container ag-theme-alpine">
			<AgGridReact
				gridOptions={gridOptions}
				rowData={rowData}
				onGridReady={onGridReady}
			></AgGridReact>
		</div>
	);
};
