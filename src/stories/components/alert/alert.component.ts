import { Component, input } from "@angular/core";

@Component({
  selector: "app-alert",
  imports: [],
  template: `
    <p>Info</p>
    <div class="alert variant-info" role="alert">
      <span class="icon" aria-hidden="true">info</span>
      <div [innerHTML]="content()"></div>
      <button aria-label="Zamknij" class="variant-transparent variant-icon">
        <span class="icon" aria-hidden="true">close</span>
      </button>
    </div>
    <p>Success</p>
    <div class="alert variant-success" role="alert">
      <span class="icon" aria-hidden="true">check_circle</span>
      <div [innerHTML]="content()"></div>
      <button aria-label="Zamknij" class="variant-transparent variant-icon">
        <span class="icon" aria-hidden="true">close</span>
      </button>
    </div>
    <p>Warning</p>
    <div class="alert variant-warning" role="alert">
      <span class="icon" aria-hidden="true">warning_amber</span>
      <div [innerHTML]="content()"></div>
      <button aria-label="Zamknij" class="variant-transparent variant-icon">
        <span class="icon" aria-hidden="true">close</span>
      </button>
    </div>
    <p>Danger</p>
    <div class="alert variant-danger" role="alert">
      <span class="icon" aria-hidden="true">highlight_off</span>
      <div [innerHTML]="content()"></div>
      <button aria-label="Zamknij" class="variant-transparent variant-icon">
        <span class="icon" aria-hidden="true">close</span>
      </button>
    </div>
  `,
  styles: ``,
})
export class AlertComponent {
  content = input.required<string>();
}
