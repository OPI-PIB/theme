import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-textarea",
  imports: [FormsModule],
  template: `
    <div style="margin-bottom: 15px;">
      <label for="textareaId">Textarea</label>
      <textarea id="textareaId" placeholder="placeholder"></textarea>
    </div>
    <div class="field">
      <label for="textareaRequiedId">Textarea</label>
      <textarea
        id="textareaRequiedId"
        placeholder="placeholder"
        required
        minlength="3"
        [(ngModel)]="text"
      ></textarea>
      <div class="error">Value to short</div>
      <div class="counter">{{ text.length }}/100</div>
    </div>
  `,
  styles: `
    .field {
      display: grid;
      grid-template-columns: auto min-content; 

      label { grid-area: 1 / 1 / 2 / 3; }

      textarea { grid-area: 2 / 1 / 3 / 3; }

      .error { grid-area: 3 / 1 / 4 / 2; }

      .counter { grid-area: 3 / 2 / 4 / 3; }
    }  
  `,
})
export class TextareaComponent {
  protected text = "";
}
