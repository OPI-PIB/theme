import { Component, input } from "@angular/core";

@Component({
  selector: "app-progress",
  imports: [],
  template: `
    <label for="file">File progress:</label>

    <progress id="file" max="100" [value]="value()">{{ value() }}%</progress>
  `,
  styles: ``,
})
export class ProgressComponent {
  value = input.required<number>();
}
