import { Component } from "@angular/core";

@Component({
  selector: "app-alert",
  imports: [],
  template: `
    <div class="alert alert-success">
      <strong>Tytuł komunikatu.</strong> Treść komunikatu.
      <a href="#">Odnośnik</a>
      <button type="button" aria-label="Zamknij">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  `,
  styles: ``,
})
export class AlertComponent {}
