import { Component } from "@angular/core";

@Component({
  selector: "app-text-elements",
  imports: [],
  templateUrl: "./text-elements.component.html",
  styles: `
    .definitions {
      display: flex;
      gap: 15px;
      list-style: none;
      margin: 0 0 5px;
      padding: 0;
      font-size: var(--font__size-xs);

      & > li {
        background: light-dark(#eee, #333);
        padding: 0 5px;
      }
    }
  `,
})
export class TextElementsComponent {}
