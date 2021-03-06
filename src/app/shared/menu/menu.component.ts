import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../core/store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  host: string;
  username: string;
  isSFTP: boolean;

  constructor(private router: Router,
              private storeService: StoreService) { }

  ngOnInit() {
    this.host = this.storeService.getConnectObject().host;
    this.username = this.storeService.getConnectObject().username;
    this.isSFTP = this.storeService.getConnectObject().isSFTP;
  }

  exit() {
    this.storeService.clearConnectObject().then(() => {
      this.router.navigate(['login']);
    });
  }
}
