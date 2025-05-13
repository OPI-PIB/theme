import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dialog",
  imports: [],
  template: `
    <button id="openDialog">Open Dialog</button>

    <dialog id="myDialog">
      <p>This is a dialog opened with JavaScript!</p>
      <button id="closeDialog">Close</button>
    </dialog>
  `,
  styles: ``,
})
export class DialogComponent implements OnInit {
  ngOnInit(): void {
    const dialog = document.getElementById("myDialog") as HTMLDialogElement;
    const openBtn = document.getElementById("openDialog");
    const closeBtn = document.getElementById("closeDialog");

    openBtn?.addEventListener("click", () => {
      dialog?.showModal();
    });

    closeBtn?.addEventListener("click", () => {
      dialog.close();
    });
  }
}
