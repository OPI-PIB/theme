import { CommonModule } from "@angular/common";
import { Component, computed, input } from "@angular/core";
import { Size, Variant } from "../../config";

@Component({
  selector: "app-button",
  imports: [CommonModule],
  template: `
    <p>Default</p>
    <button type="button" [disabled]="disabled()" [ngClass]="classes()">
      {{ label() }}
    </button>
    <p>Primary</p>
    <button
      type="button"
      [disabled]="disabled()"
      [ngClass]="['variant-primary', classes()]"
    >
      {{ label() }}
    </button>
    <p>Secondary</p>
    <button
      type="button"
      [disabled]="disabled()"
      [ngClass]="['variant-secondary', classes()]"
    >
      {{ label() }}
    </button>
  `,
})
export class ButtonComponent {
  label = input.required<string>();

  size = input.required<Size>();

  disabled = input.required<boolean>();

  classes = computed(() => [this.size()].join(" "));
}
