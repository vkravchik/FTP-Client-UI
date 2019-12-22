import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ConnectionService} from '../../connection.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {ConnectionFormComponent} from '../../shared/connection-form/connection-form.component';
import {BaseComponent} from '../../core/class/BaseComponent';
import {ToastrService} from 'ngx-toastr';
import {ChangeDetection} from '@angular/cli/lib/config/schema';

@Component({
  selector: 'app-connection-table',
  templateUrl: './connection-table.component.html',
  styleUrls: ['./connection-table.component.css']
})
export class ConnectionTableComponent extends BaseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'host', 'username', 'isSFTP', 'actions'];
  dataSource: any = [];

  constructor(private conn: ConnectionService,
              private dialog: MatDialog,
              protected toast: ToastrService,
              private cd: ChangeDetectorRef) {
    super(toast);
  }

  ngOnInit() {
    this.showSpinner();
    this.conn.getConn().subscribe(res => {
      this.dataSource = res;

      this.hideSpinner();
    });
  }

  edit(rowData): void {
    const dialogRef = this.dialog.open(ConnectionFormComponent, {
      width: '750px',
      height: '450px',
      data: rowData
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res.data) {
        this.showSpinner();
        this.conn.editConn(res.data).subscribe((ress: any) => {
          this.dataSource = this.dataSource.map(item => item.id === res.data.id ? res.data : item);

          this.toast.success('Edit Success');
        });
      }
      this.hideSpinner();
    });
  }

  delete(rowData): void {
    this.showSpinner();
    this.conn.deleteConn(rowData).subscribe(res => {
      this.dataSource = this.dataSource.filter(item => item.id !== rowData.id);

      this.showSuccess('Delete Success');
      this.hideSpinner();
    });
  }

}
