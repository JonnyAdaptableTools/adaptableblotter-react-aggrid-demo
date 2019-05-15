import React from 'react';

// import the blotter and types
import AdaptableBlotterReact from 'adaptableblotter-react-aggrid';

// import blotter css and themes
import 'adaptableblotter-react-aggrid/base.css';
import 'adaptableblotter-react-aggrid/themes/light.css';
import 'adaptableblotter-react-aggrid/themes/dark.css';

// import aggrid themes
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

import { LicenseManager } from 'ag-grid-enterprise';

LicenseManager.setLicenseKey(process.env.REACT_APP_AG_GRID_LICENSE);

const columnDefs = [
  { headerName: 'Make', field: 'make' },
  { headerName: 'Model', field: 'model' },
  { headerName: 'Price', field: 'price' }
];
// specify the data
const rowData = [
  { id: 1, make: 'Toyota', model: 'Celica', price: 35000 },
  { id: 2, make: 'Ford', model: 'Mondeo', price: 32000 },
  { id: 3, make: 'Ford', model: 'Fiesta', price: 22000 },
  { id: 4, make: 'Porsche', model: 'Boxter', price: 72000 }
];

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
  enableSorting: true,
  enableFilter: true
};

const adaptableBlotterOptions = {
  primaryKey: 'id',
  userName: 'demo user',
  blotterId: 'demo-react-app',
  licenceKey: process.env.REACT_APP_ADAPTABLEBLOTTER_ENTERPRISE_LICENSE
};

export default () => (
  <AdaptableBlotterReact
    style={{ height: '100vh' }}
    gridOptions={gridOptions}
    blotterOptions={adaptableBlotterOptions}
  />
);
