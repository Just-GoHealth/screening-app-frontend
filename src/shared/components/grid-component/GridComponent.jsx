import React, { useCallback, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { GridDownloadAction } from './GridDownloadAction';
import './grid.styles.css';

export const GridComponent = ({
	columnDefs,
	onDownloadActionClick,
	fetchUrl,
}) => {
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
		fetch(`${fetchUrl}`)
			.then((res) => res.json())
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
	}, []);

	return (
		<div className="my-grid-container ag-theme-alpine">
			<AgGridReact
				gridOptions={gridOptions}
				onGridReady={onGridReady}
			></AgGridReact>
		</div>
	);
};
