export class BaseComponent {
  loading = false;

  showSpinner(): void {
    this.loading = true;
  }

  hideSpinner(): void {
    this.loading = false;
  }
}
