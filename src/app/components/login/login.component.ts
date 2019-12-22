import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StoreService} from '../../core/store.service';
import {FtpService} from '../../ftp.service';
import {Router} from '@angular/router';
import {ConnectionService} from '../../connection.service';
import {flatMap} from 'rxjs/operators';
import {BaseComponent} from '../../core/class/BaseComponent';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {
  hide = true;
  connectingForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private storeService: StoreService,
              private ftp: FtpService,
              protected toast: ToastrService,
              private conn: ConnectionService) {
    super(toast);
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.connectingForm = this.fb.group({
      host: ['test.rebex.net'],
      username: ['demo'],
      password: ['password'],
      isSFTP: false,
    });
  }

  connect(): void {
    this.showSpinner();
    this.conn.addConn(this.connectingForm.value).subscribe(res => {
    });
    this.ftp.connect(this.connectingForm.value).subscribe(res => {
      this.storeService.setConnectObject(this.connectingForm.value);

      this.router.navigate(['']);
      this.hideSpinner();
    });
  }

  openConnections() {
    this.router.navigate(['connection']);
  }
}
