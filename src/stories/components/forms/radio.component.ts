import { Component } from "@angular/core";

@Component({
  selector: "app-radio",
  imports: [],
  template: `
    <fieldset>
      <legend>Choose your favorite monster</legend>

      <input type="radio" id="kraken" name="monster" value="K" />
      <label for="kraken">Kraken</label><br />

      <input type="radio" id="sasquatch" name="monster" value="S" />
      <label for="sasquatch">Sasquatch</label><br />

      <input type="radio" id="mothman" name="monster" value="M" />
      <label for="mothman">Mothman</label>
    </fieldset>
  `,
  styles: ``,
})
export class RadioComponent {}
