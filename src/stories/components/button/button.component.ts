import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: "app-button",
  imports: [CommonModule],
  template: `
    <p>Default</p>
    <div class="row">
      <button class="size-lg" [disabled]="disabled()">
        @if (iconsBefore()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        } large {{ label() }}
        @if (iconsAfter()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        }
      </button>

      <button [disabled]="disabled()">
        @if (iconsBefore()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        } medium {{ label() }}
        @if (iconsAfter()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        }
      </button>

      <button class="size-sm" [disabled]="disabled()">
        @if (iconsBefore()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        } small {{ label() }}
        @if (iconsAfter()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        }
      </button>

      <button
        aria-label="Zamknij"
        class="variant-icon size-lg"
        [disabled]="disabled()"
      >
        <span class="icon-close"></span>
      </button>
      <button aria-label="Zamknij" class="variant-icon" [disabled]="disabled()">
        <span class="icon-close"></span>
      </button>
      <button
        aria-label="Zamknij"
        class="variant-icon size-sm"
        [disabled]="disabled()"
      >
        <span class="icon-close"></span>
      </button>
    </div>
    <p>Primary</p>
    <div class="row">
      <button class="variant-primary size-lg" [disabled]="disabled()">
        @if (iconsBefore()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        } large {{ label() }}
        @if (iconsAfter()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        }
      </button>
      <button class="variant-primary" [disabled]="disabled()">
        @if (iconsBefore()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        } medium {{ label() }}
        @if (iconsAfter()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        }
      </button>
      <button class="variant-primary size-sm" [disabled]="disabled()">
        @if (iconsBefore()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        } small {{ label() }}
        @if (iconsAfter()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        }
      </button>
      <button
        aria-label="Zamknij"
        class="variant-icon variant-primary size-lg"
        [disabled]="disabled()"
      >
        <span class="icon-close"></span>
      </button>
      <button
        aria-label="Zamknij"
        class="variant-icon variant-primary"
        [disabled]="disabled()"
      >
        <span class="icon-close"></span>
      </button>
      <button
        aria-label="Zamknij"
        class="variant-icon variant-primary size-sm"
        [disabled]="disabled()"
      >
        <span class="icon-close"></span>
      </button>
    </div>
    <p>Secondary</p>
    <div class="row">
      <button class="variant-secondary size-lg" [disabled]="disabled()">
        @if (iconsBefore()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        } large {{ label() }}
        @if (iconsAfter()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        }
      </button>
      <button class="variant-secondary" [disabled]="disabled()">
        @if (iconsBefore()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        } medium {{ label() }}
        @if (iconsAfter()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        }
      </button>
      <button class="variant-secondary size-sm" [disabled]="disabled()">
        @if (iconsBefore()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        } small {{ label() }}
        @if (iconsAfter()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        }
      </button>
      <button
        aria-label="Zamknij"
        class="variant-icon variant-secondary size-lg"
        [disabled]="disabled()"
      >
        <span class="icon-close"></span>
      </button>
      <button
        aria-label="Zamknij"
        class="variant-icon variant-secondary"
        [disabled]="disabled()"
      >
        <span class="icon-close"></span>
      </button>
      <button
        aria-label="Zamknij"
        class="variant-icon variant-secondary size-sm"
        [disabled]="disabled()"
      >
        <span class="icon-close"></span>
      </button>
    </div>
    <p>Transparent</p>
    <div class="row">
      <button class="variant-transparent size-lg" [disabled]="disabled()">
        @if (iconsBefore()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        } large {{ label() }}
        @if (iconsAfter()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        }
      </button>
      <button class="variant-transparent" [disabled]="disabled()">
        @if (iconsBefore()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        } medium {{ label() }}
        @if (iconsAfter()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        }
      </button>
      <button class="variant-transparent size-sm" [disabled]="disabled()">
        @if (iconsBefore()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        } small {{ label() }}
        @if (iconsAfter()) {
        <span class="icon" aria-hidden="true">{{ icon() }}</span>
        }
      </button>
      <button
        aria-label="Zamknij"
        class="variant-icon variant-transparent size-lg"
        [disabled]="disabled()"
      >
        <span class="icon-close"></span>
      </button>
      <button
        aria-label="Zamknij"
        class="variant-icon variant-transparent"
        [disabled]="disabled()"
      >
        <span class="icon-close"></span>
      </button>
      <button
        aria-label="Zamknij"
        class="variant-icon variant-transparent size-sm"
        [disabled]="disabled()"
      >
        <span class="icon-close"></span>
      </button>
    </div>
  `,
  styles: `
    .row {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: start;
    }

    @media (min-width: 500px) { 
      .row { 
        flex-direction: row;
      }
    }
  `,
})
export class ButtonComponent {
  label = input.required<string>();

  disabled = input.required<boolean>();

  icon = input.required<string>();

  iconsBefore = input.required<boolean>();

  iconsAfter = input.required<boolean>();
}
