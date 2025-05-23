import { Component } from "@angular/core";

@Component({
  selector: "app-meter",
  imports: [],
  template: `
    <label for="fuel">Fuel level:</label>

    <meter
      id="fuel"
      min="0"
      max="100"
      low="33"
      high="66"
      optimum="80"
      value="50"
    >
      at 50/100
    </meter>
  `,
  styles: ``,
})
export class MeterComponent {}
