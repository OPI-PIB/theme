import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-dialog",
  imports: [],
  template: `
    <button id="openDialog">Open dialog</button>

    <dialog id="myDialog">
      <p>This is a dialog opened with JavaScript!</p>
      <button id="closeDialog">Close</button>
    </dialog>
  `,
  styles: ``,
})
export class DialogComponent implements OnInit, OnDestroy {
  #dialog!: HTMLDialogElement;
  #openBtn!: HTMLElement;
  #closeBtn!: HTMLElement;

  #onOpen = () => this.#dialog.showModal();
  #onClose = () => this.#dialog.close();

  ngOnInit(): void {
    this.#dialog = document.getElementById("myDialog") as HTMLDialogElement;
    this.#openBtn = document.getElementById("openDialog") as HTMLElement;
    this.#closeBtn = document.getElementById("closeDialog") as HTMLElement;

    this.#openBtn.addEventListener("click", this.#onOpen);
    this.#closeBtn.addEventListener("click", this.#onClose);
  }

  ngOnDestroy(): void {
    this.#openBtn.removeEventListener("click", this.#onOpen);
    this.#closeBtn.removeEventListener("click", this.#onClose);
  }
}
