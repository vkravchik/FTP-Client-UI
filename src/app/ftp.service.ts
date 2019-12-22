import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StoreService} from './core/store.service';

@Injectable({
  providedIn: 'root'
})
export class FtpService {
  url = 'http://localhost:8000/api/ftp';

  constructor(private http: HttpClient,
              private storeService: StoreService) { }

  connect(connectObject): Observable<any> {
    return this.http.post(`${this.url}/connect`, connectObject);
  }

  getDir(dir: string): Observable<any> {
    const obj = this.prepareData(dir);

    return this.http.post(`${this.url}/get_dir`, obj);
  }

  downloadFile(file: string, dir: string): Observable<any> {
    const obj = this.prepareData({file, dir}, true);

    return this.http.post(`${this.url}/download_file`, obj);
  }

  prepareData(data: any, isFile?: boolean): any {
    if (isFile) {
      return {...this.storeService.getConnectObject(), filename: data.file, dir: data.dir};
    }

    return {...this.storeService.getConnectObject(), dir: data};
  }
}
