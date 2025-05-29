import { Component, input } from "@angular/core";

@Component({
  selector: "app-input",
  imports: [],
  template: `
    <div>
      <label for="id">text</label>
      <input
        type="text"
        id="id"
        placeholder="placeholder"
        [disabled]="disabled()"
      />
    </div>
    <div>
      <label for="idError">text required</label>
      <input
        type="text"
        id="idError"
        placeholder="placeholder"
        required
        minlength="3"
        [disabled]="disabled()"
      />
      <div class="error">Value to short</div>
    </div>
    <div>
      <label for="inputEmail">email</label>
      <input type="email" id="inputEmail" [disabled]="disabled()" />
    </div>
    <div>
      <label for="inputUrl">url</label>
      <input type="url" id="inputUrl" [disabled]="disabled()" />
    </div>
    <div>
      <label for="inputPassword">password</label>
      <input type="password" id="inputPassword" [disabled]="disabled()" />
    </div>
    <div>
      <label for="inputSearch">search</label>
      <input type="search" id="inputSearch" [disabled]="disabled()" />
    </div>
    <div>
      <label for="inputNumber">number</label>
      <input type="number" id="inputNumber" [disabled]="disabled()" />
    </div>
    <div>
      <label for="inputTel">tel</label>
      <input type="tel" id="inputTel" [disabled]="disabled()" />
    </div>
    <div>
      <label for="idRange">range</label>
      <input type="range" id="idRange" [disabled]="disabled()" />
    </div>
    <div>
      <label for="idDate">date</label>
      <input type="date" id="idDate" [disabled]="disabled()" />
    </div>
    <div>
      <label for="idDatetimeLocal">date-time local</label>
      <input
        type="datetime-local"
        id="idDatetimeLocal"
        [disabled]="disabled()"
      />
    </div>
    <div>
      <label for="idTime">time</label>
      <input type="time" id="idTime" [disabled]="disabled()" />
    </div>
    <div>
      <label for="idColor">color</label>
      <input type="color" id="idColor" [disabled]="disabled()" />
    </div>
  `,
  styles: `
    :host {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
    }
  `,
})
export class InputComponent {
  disabled = input.required<boolean>();
}
