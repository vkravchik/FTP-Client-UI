import {ToastrService} from 'ngx-toastr';

export class BaseComponent {
  loading = false;

  constructor(protected toast: ToastrService) {
  }

  showSpinner(): void {
    this.loading = true;
  }

  hideSpinner(): void {
    this.loading = false;
  }

  showSuccess(text): void {
    this.toast.success(text);
  }

  showError(text): void {
    this.toast.error(text);
  }
}
