import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {StoreService} from '../../core/store.service';
import {FtpService} from '../../ftp.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.css']
})
export class ConnectionFormComponent implements OnInit {

  hide = true;
  connectingForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              public dialogRef: MatDialogRef<ConnectionFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.connectingForm = this.fb.group({
      id: [this.data.id],
      host: [this.data.host],
      username: [this.data.username],
      password: [this.data.password],
      isSFTP: [this.data.isSFTP],
    });
  }

  onnoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close({data: this.connectingForm.value});
  }
}
