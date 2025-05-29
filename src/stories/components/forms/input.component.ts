import { Component } from "@angular/core";

@Component({
  selector: "app-input",
  imports: [],
  template: `
    <div>
      <label for="id">text</label>
      <input type="text" id="id" placeholder="placeholder" />
    </div>
    <div>
      <label for="idError">text required</label>
      <input
        type="text"
        id="idError"
        placeholder="placeholder"
        required
        minlength="3"
      />
      <div class="error">Value to short</div>
    </div>
    <div>
      <label for="inputEmail">email</label>
      <input type="email" id="inputEmail" />
    </div>
    <div>
      <label for="inputUrl">url</label>
      <input type="url" id="inputUrl" />
    </div>
    <div>
      <label for="inputPassword">password</label>
      <input type="password" id="inputPassword" />
    </div>
    <div>
      <label for="inputSearch">search</label>
      <input type="search" id="inputSearch" />
    </div>
    <div>
      <label for="inputNumber">number</label>
      <input type="number" id="inputNumber" />
    </div>
    <div>
      <label for="inputTel">tel</label>
      <input type="tel" id="inputTel" />
    </div>
    <div>
      <label for="idRange">range</label>
      <input type="range" id="idRange" />
    </div>
    <div>
      <label for="idDate">date</label>
      <input type="date" id="idDate" />
    </div>
    <div>
      <label for="idDatetimeLocal">date-time local</label>
      <input type="datetime-local" id="idDatetimeLocal" />
    </div>
    <div>
      <label for="idTime">time</label>
      <input type="time" id="idTime" />
    </div>
    <div>
      <label for="idColor">color</label>
      <input type="color" id="idColor" />
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
export class InputComponent {}
