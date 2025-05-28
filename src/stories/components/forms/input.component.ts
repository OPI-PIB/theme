import { Component } from "@angular/core";

@Component({
  selector: "app-input",
  imports: [],
  template: `
    <div style="margin-bottom: 15px;">
      <label for="inputId">Input</label>
      <input type="text" id="inputId" placeholder="placeholder" />
    </div>
    <div>
      <label for="inputIdError">Input error</label>
      <input type="text" id="inputIdError" required minlength="3" />
      <div class="error">Value to short</div>
    </div>
  `,
  styles: ``,
})
export class InputComponent {}
