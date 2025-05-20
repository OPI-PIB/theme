import { Component } from "@angular/core";

@Component({
  selector: "app-data-list",
  imports: [],
  template: `
    <label for="ice-cream-choice">Choose a flavor:</label>
    <input
      list="ice-cream-flavors"
      id="ice-cream-choice"
      name="ice-cream-choice"
    />

    <datalist id="ice-cream-flavors">
      <option value="Chocolate"></option>
      <option value="Coconut"></option>
      <option value="Mint"></option>
      <option value="Strawberry"></option>
      <option value="Vanilla"></option>
    </datalist>
  `,
  styles: ``,
})
export class DataListComponent {}
