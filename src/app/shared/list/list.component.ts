import {Component, OnInit, ViewChild} from '@angular/core';
import {FtpService} from '../../ftp.service';
import {BaseComponent} from '../../core/class/BaseComponent';
import {MatMenuTrigger} from '@angular/material';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent implements OnInit {
  dirs: any;
  files: any;

  path: string[] = [];

  @ViewChild(MatMenuTrigger, {static: false})
  contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  constructor(private ftp: FtpService,
              protected toast: ToastrService) {
    super(toast);
  }

  ngOnInit() {
    this.path.push('');
    this.getDirs(this.path[0]);
  }

  downloadFile(file: string): void {
    this.showSpinner();

    const dir = this.path.join('/');
    this.ftp.downloadFile(file, dir).subscribe(res => {


      const dataFile = new Blob([res]);

      const a = document.createElement('a');

      document.body.appendChild(a);
      a.style.display = 'none';
      a.href = window.URL.createObjectURL(dataFile);
      a.download = `${file}` + dataFile.type;
      a.click();
      a.remove();

      this.showSuccess('Download Success');

      this.hideSpinner();
    }, error => {
      this.showError('Something went wrong');

      this.hideSpinner();
    });
  }

  openFolder(folder: string): void {
    if (folder !== '..') {
      this.path.push(folder);
    } else {
      if (this.path.length > 1) {
        this.path.pop();
      }
    }
    console.log(this.path);

    this.getDirs(this.path.join('/'));
  }

  getDirs(folder?: string): void {
    this.showSpinner();
    this.ftp.getDir(folder).subscribe((res: any) => {
      this.dirs = [{name: '..', type: folder}, ...res.tree.filter(a => a.type === 'folder')];
      this.files = res.tree.filter(a => a.type === 'file');

      this.hideSpinner();
    });
  }

  onContextMenu(event: MouseEvent, item: any) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = {item};
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  onContextMenuAction1(item: any) {
    alert(`Click on Action 1 for ${item.name}`);
  }

  onContextMenuAction2(item: any) {
    alert(`Click on Action 2 for ${item.name}`);
  }
}
