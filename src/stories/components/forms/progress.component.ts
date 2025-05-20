import { Component } from "@angular/core";

@Component({
  selector: "app-progress",
  imports: [],
  template: `
    <label for="file">File progress:</label>

    <progress id="file" max="100" value="70">70%</progress>
  `,
  styles: ``,
})
export class ProgressComponent {}
