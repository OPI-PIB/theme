import { Component, input } from "@angular/core";

@Component({
  selector: "app-checkbox",
  imports: [],
  template: `
    <div>
      <input type="checkbox" id="checkboxId" [disabled]="disabled()" />
      <label for="checkboxId">Checkbox</label>
    </div>
    <div>
      <input
        type="checkbox"
        id="checkboxRequiredId"
        [disabled]="disabled()"
        required
      />
      <label for="checkboxRequiredId">Checkbox required</label>
      <div class="error">required</div>
    </div>
  `,
  styles: `
    :host {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
    }
    `,
})
export class CheckboxComponent {
  disabled = input.required<boolean>();
}
