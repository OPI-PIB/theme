import { Component, input } from "@angular/core";

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
      [value]="value()"
    >
      at {{ value() }}/100
    </meter>
  `,
  styles: ``,
})
export class MeterComponent {
  value = input.required<number>();
}
