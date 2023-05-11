import React, { useState } from 'react';
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

	return (
		<div className="my-grid-container ag-theme-alpine">
			<AgGridReact gridOptions={gridOptions} rowData={rowData}></AgGridReact>
		</div>
	);
};
