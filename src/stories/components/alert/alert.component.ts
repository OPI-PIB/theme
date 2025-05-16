import { Component, input } from "@angular/core";

@Component({
  selector: "app-alert",
  imports: [],
  template: `
    <p>Info</p>
    <div class="alert variant-info" role="alert">
      <div [innerHTML]="content()"></div>
      <button aria-label="Zamknij" class="variant-icon">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <p>Success</p>
    <div class="alert variant-success" role="alert">
      <div [innerHTML]="content()"></div>
      <button aria-label="Zamknij" class="variant-icon">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <p>Warning</p>
    <div class="alert variant-warning" role="alert">
      <div [innerHTML]="content()"></div>
      <button aria-label="Zamknij" class="variant-icon">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <p>Danger</p>
    <div class="alert variant-danger" role="alert">
      <div [innerHTML]="content()"></div>
      <button aria-label="Zamknij" class="variant-icon">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  `,
  styles: ``,
})
export class AlertComponent {
  content = input.required<string>();
}
