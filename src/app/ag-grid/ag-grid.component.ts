import { Component, OnInit, ViewChild } from '@angular/core';
import { CellClickedEvent, ColDef, GridReadyEvent, ICellRendererParams, IDatasource, IGetRowsParams, } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { MyCellRendererComponent } from '../my-cell-renderer/my-cell-renderer.component';
import { MoodRendererComponent } from '../mood-renderer/mood-renderer.component';
import { CellEditorComponent } from '../cell-editor/cell-editor.component';
import { ValueFormatterParams } from 'ag-grid-community';


@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})

export class AgGridComponent implements OnInit {
  rowData$!: Observable<any[]>

  colDefs: ColDef[] = [
    { headerName: 'Make', field: 'make', editable: true },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Price_Formatter', field: 'price',
    valueFormatter: currencyFormatter
  }
  ];

  //Exporting AG-Grid into Excel
onBtExport() {
    this.agGrid.api.exportDataAsExcel();
  }

  //Using Grid API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  //
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this
    this.rowData$ = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json')
  }
  //Grid Event
  onCellClicked(event: CellClickedEvent) {
    console.log(event)
  }
  //Clearing Selection
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  //Infinite Row Model
  onGridReady(params: GridReadyEvent) {
    this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe((data) => {
        const dataSource: IDatasource = {
          rowCount: undefined,
          getRows: function (params: IGetRowsParams) {
            console.log(
              'asking for ' + params.startRow + ' to ' + params.endRow
            );
            // At this point in your code, you would call the server.
            // To make the demo look real, wait for 500ms before returning
            setTimeout(function () {
              // take a slice of the total rows
              const rowsThisPage = data.slice(params.startRow, params.endRow);
              // if on or after the last page, work out the last row.
              let lastRow = -1;
              if (data.length <= params.endRow) {
                lastRow = data.length;
              }
              // call the success callback
              params.successCallback(rowsThisPage, lastRow);
            }, 500);
          },
        };
        params.api!.setDatasource(dataSource);
      });
  }
  //

  //INFINITE ROW MODEL
  public columnDefs: ColDef[] = [
    // this row shows the row index, doesn't use any data from the row
    {
      headerName: 'ID',
      maxWidth: 100,
      // it is important to have node.id here, so that when the id changes (which happens
      // when the row is loaded) then the cell is refreshed.
      valueGetter: 'node.id',
      cellRenderer: function (params: ICellRendererParams) {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return '<img src="https://www.ag-grid.com/example-assets/loading.gif">';
        }
      },
    },
    {
      field: 'athlete', minWidth: 150, cellRenderer: MyCellRendererComponent,
      cellRendererParams: {
        buttonText: 'Name'
      }
    },
    {
      field: 'age', cellRenderer: MyCellRendererComponent,
      cellRendererParams: {
        buttonText: 'Age'
      }
    },
    { field: 'country', minWidth: 150 },
    { field: 'year'},
    { field: 'mood', cellRenderer: MoodRendererComponent, cellEditor: CellEditorComponent,
    cellEditorPopup: true,
    editable: true,},
    { field: 'date', minWidth: 150 , editable: true},
    { field: 'sport', minWidth: 150 },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];
  public defaultColDef: ColDef = {
    sortable: true, filter: true,
    flex: 1,
    resizable: true,
    minWidth: 100,
  };
  public rowBuffer = 20;
  public rowSelection = 'multiple';
  public rowModelType = 'infinite';
  public cacheBlockSize = 50; //IT will buffer 50 rows at first
  public cacheOverflowSize = 3; //Shows 3 more buffering rows after 1 complete scroll
  public maxConcurrentDatasourceRequests = 1;
  public infiniteInitialRowCount = 150; //It will show 150 row in 1st scroll to the bottom
  public maxBlocksInCache = 2;  //how many rows each block in the cache should contain

}
  //CURRENCY FORMATTER
  function currencyFormatter(params: ValueFormatterParams) {
    return '$' + formatNumber(params.value);
  }
  function formatNumber(number: number) {
    // this puts commas into the number eg 1000 goes to 1,000,
    // i pulled this from stack overflow, i have no idea how it works
    return Math.floor(number)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
