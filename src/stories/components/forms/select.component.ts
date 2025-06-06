import { Component, input } from "@angular/core";

@Component({
  selector: "app-select",
  imports: [],
  template: `
    <div style="margin-bottom: 15px;">
      <label for="selectId">Select</label>
      <select id="selectId" [disabled]="disabled()">
        <option value="">---</option>
        <option value="option1">Option 1</option>
        <optgroup label="Sauropods">
          <option>Diplodocus</option>
          <option>Saltasaurus</option>
          <option>Apatosaurus</option>
        </optgroup>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
    <div>
      <label for="selectRequiredId">Select required</label>
      <select id="selectRequiredId" [disabled]="disabled()" required>
        <option value="">---</option>
        <option value="option1">Option 1</option>
      </select>
      <div class="error">Value required</div>
    </div>
  `,
  styles: ``,
})
export class SelectComponent {
  disabled = input.required<boolean>();
}
