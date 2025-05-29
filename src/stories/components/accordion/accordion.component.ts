import { Component, input, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-accordion",
  imports: [],
  template: `
    <details>
      <summary>{{ label() }} 1</summary>
      {{ content() }} 1
    </details>
    <details>
      <summary>{{ label() }} 2</summary>
      {{ content() }} 2
    </details>
    <details>
      <summary>{{ label() }} 3 with nested</summary>

      <details>
        <summary>nested {{ label() }} 1</summary>
        nested {{ content() }} 1
      </details>
      <details>
        <summary>nested {{ label() }} 2</summary>
        nested {{ content() }} 2
      </details>
    </details>
  `,
  styles: ``,
})
export class AccordionComponent implements OnInit, OnDestroy {
  label = input.required<string>();

  content = input.required<string>();

  private listeners: Array<{
    detail: HTMLDetailsElement;
    handler: () => void;
  }> = [];

  ngOnInit(): void {
    const allDetails = Array.from(
      document.querySelectorAll<HTMLDetailsElement>("details")
    );

    allDetails.forEach((detail) => {
      const handler = () => {
        if (!detail.open) return;

        const parent = detail.parentElement;
        const siblings: HTMLDetailsElement[] = parent
          ? Array.from(parent.querySelectorAll(":scope > details"))
          : allDetails;

        siblings.forEach((d) => {
          if (d !== detail) {
            d.open = false;
          }
        });
      };

      detail.addEventListener("toggle", handler);
      this.listeners.push({ detail, handler });
    });
  }

  ngOnDestroy(): void {
    this.listeners.forEach(({ detail, handler }) => {
      detail.removeEventListener("toggle", handler);
    });
  }
}
