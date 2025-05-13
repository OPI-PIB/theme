import { Component, input } from "@angular/core";

@Component({
  selector: "app-link",
  imports: [],
  template: `<a href="/">
    {{ label() }}
  </a>`,
})
export class LinkComponent {
  label = input.required<string>();
}
