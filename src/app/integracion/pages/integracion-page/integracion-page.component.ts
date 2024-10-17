import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { IntegracionesService } from '../../services/integracion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MATERIAL_MODULES } from '../../../material/material-exports';
import { IntegracionTabla } from '../../interfaces/tabla.interface';
import { IntegracionDetailsDialogComponent } from '../../components/integracion-details-dialog/integracion-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-integracion-page',
  standalone: true,
  imports: [CommonModule, MATERIAL_MODULES],
  templateUrl: './integracion-page.component.html',
  styleUrls: ['./integracion-page.component.css']
})
export class IntegracionPageComponent implements OnInit {

  public dataSource = new MatTableDataSource<IntegracionTabla>();
  public displayedColumns: string[] = [
    'IFZID',
    'ACTIVITY_DATE',
    'DATA_ORIGIN',
    'USER_ID',
   // 'REQUEST_DATA',
    //'RESPONSE_DATA',
    //'REQUEST_TIMESTAMP',
    //'RESPONSE_TIMESTAMP',
    'RESPONSE_MESSAGE',
    'PROC_IND',
    'SETDATA_TIMESTAMP',
    'GETDATA_TIMESTAMP',
    'PRCID',
    'ACTIONS'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private integracionServices: IntegracionesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.integracionServices.getIntegracionTablaById(id)),
      )
      .subscribe(data => {
        if (!data || !Array.isArray(data)) {
          this.router.navigate(['/integraciones/list']);
          return;
        }

        // Transform the data if necessary
        const transformedData: IntegracionTabla[] = data.map(item => item.fields);
        this.dataSource.data = transformedData;

        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
      });
  }


  openDialog(rowData: IntegracionTabla): void {
    this.dialog.open(IntegracionDetailsDialogComponent, {
      width: '1000px',
      height: '800px',
      data: rowData
    });
  }


  goBack(): void {
    this.router.navigateByUrl('/integraciones/list');
  }
}
