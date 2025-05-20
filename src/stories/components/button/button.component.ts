import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: "app-button",
  imports: [CommonModule],
  template: `
    <p>Default</p>
    <div class="row">
      <button class="size-lg" [disabled]="disabled()">
        large {{ label() }}
      </button>
      <button [disabled]="disabled()">medium {{ label() }}</button>
      <button class="size-sm" [disabled]="disabled()">
        small {{ label() }}
      </button>
    </div>
    <p>Primary</p>
    <div class="row">
      <button class="variant-primary size-lg" [disabled]="disabled()">
        large {{ label() }}
      </button>
      <button class="variant-primary" [disabled]="disabled()">
        medium {{ label() }}
      </button>
      <button class="variant-primary size-sm" [disabled]="disabled()">
        small {{ label() }}
      </button>
    </div>
    <p>Secondary</p>
    <div class="row">
      <button class="variant-secondary size-lg" [disabled]="disabled()">
        large {{ label() }}
      </button>
      <button class="variant-secondary" [disabled]="disabled()">
        medium {{ label() }}
      </button>
      <button class="variant-secondary size-sm" [disabled]="disabled()">
        small {{ label() }}
      </button>
    </div>
  `,
  styles: `
    .row {
      display: flex;
      gap: 15px;
      align-items: start;
    }
  `,
})
export class ButtonComponent {
  label = input.required<string>();

  disabled = input.required<boolean>();
}
