import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StoreService} from '../../core/store.service';
import {FtpService} from '../../ftp.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  connectingForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private storeService: StoreService,
              private ftp: FtpService) { }

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
    this.ftp.connect(this.connectingForm.value).subscribe(() => {
      this.storeService.setConnectObject(this.connectingForm.value);

      this.router.navigate(['']);
    });
  }
}
