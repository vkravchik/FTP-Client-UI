import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  setConnectObject(obj: any): void {
    localStorage.setItem('connect', JSON.stringify(obj));
  }

  getConnectObject(): any {
    return JSON.parse(localStorage.getItem('connect'));
  }

  async clearConnectObject() {
    await localStorage.removeItem('connect');
  }
}
