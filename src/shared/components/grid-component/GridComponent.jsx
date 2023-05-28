import React, { createContext, useCallback, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { GridSearch } from "./GridSearch";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./grid.styles.css";

export const GridContext = createContext();

export const GridComponent = ({ columnDefs, fetchUrl, searchplaceholder }) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const gridOptions = {
    columnDefs,
    defaultColDef: {
      sortable: true,
      resizable: true,
      flex: 2,
      cellStyle: {
        whiteSpace: "normal",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textAlign: "center",
      },
    },
    animateRows: true,
    pagination: true,
    paginationPageSize: 10,
  };

  const onGridReady = useCallback((params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    {
      fetchUrl === "https://screening-tool-api.onrender.com/schools" &&
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
          .catch((err) => console.log("Error fetching data:", err));
    }
    {
      fetchUrl !== "https://screening-tool-api.onrender.com/schools" &&
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
          .catch((err) => console.log("Error fetching data:", err));
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
