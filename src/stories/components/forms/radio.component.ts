import { Component } from "@angular/core";

@Component({
  selector: "app-radio",
  imports: [],
  template: `
    <div>
      <input type="radio" name="radioGroup" id="radio1Id" />
      <label for="radio1Id">Radio 1</label>
    </div>
    <div>
      <input type="radio" name="radioGroup" id="radio2Id" />
      <label for="radio2Id">Radio 2</label>
    </div>
  `,
  styles: ``,
})
export class RadioComponent {}
