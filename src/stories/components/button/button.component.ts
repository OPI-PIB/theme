import { CommonModule } from "@angular/common";
import { Component, computed, input } from "@angular/core";
import { Size, sizes, Variant, variants } from "../../config";

@Component({
  selector: "app-button",
  imports: [CommonModule],
  template: `<button type="button" [ngClass]="classes()">
    {{ label() }}
  </button>`,
})
export class ButtonComponent {
  label = input<string>();

  variant = input<Variant>(variants[0]);

  size = input<Size>(sizes[0]);

  classes = computed(() => [this.variant(), this.size()].join(" "));
}
