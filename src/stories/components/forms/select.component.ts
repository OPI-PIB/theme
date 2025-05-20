import { Component } from "@angular/core";

@Component({
  selector: "app-select",
  imports: [],
  template: `
    <label for="selectId">Select</label>
    <select id="selectId">
      <option value="option1">Option 1</option>
      <optgroup label="Sauropods">
        <option>Diplodocus</option>
        <option>Saltasaurus</option>
        <option>Apatosaurus</option>
      </optgroup>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  `,
  styles: ``,
})
export class SelectComponent {}
