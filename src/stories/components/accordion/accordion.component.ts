import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-accordion",
  imports: [],
  template: `
    <details>
      <summary>Panel 1</summary>
      <div>Content for Panel 1</div>
    </details>

    <details>
      <summary>Panel 2</summary>
      <div>Content for Panel 2</div>
    </details>
    <details>
      <summary>Panel 3</summary>
      <div>Content for Panel 3</div>
    </details>
  `,
  styles: ``,
})
export class AccordionComponent implements OnInit {
  ngOnInit(): void {
    const allDetails = document.querySelectorAll("details");

    allDetails.forEach((targetDetail) => {
      targetDetail.addEventListener("toggle", () => {
        if (targetDetail.open) {
          allDetails.forEach((detail) => {
            if (detail !== targetDetail) {
              detail.removeAttribute("open");
            }
          });
        }
      });
    });
  }
}
