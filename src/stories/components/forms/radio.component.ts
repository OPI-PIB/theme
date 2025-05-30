import { Component, input } from "@angular/core";

@Component({
  selector: "app-radio",
  imports: [],
  template: `
    <fieldset style="margin-bottom: 16px">
      <legend>Choose your favorite monster</legend>

      <div class="horizontal">
        <div>
          <input
            type="radio"
            id="krakenH"
            name="monsterH"
            value="K"
            [disabled]="disabled()"
            required
          />
          <label for="krakenH">Kraken</label>
        </div>

        <div>
          <input
            type="radio"
            id="sasquatchH"
            name="monsterH"
            value="S"
            [disabled]="disabled()"
          />
          <label for="sasquatchH">Sasquatch</label>
        </div>

        <div>
          <input
            type="radio"
            id="mothmanH"
            name="monsterH"
            value="M"
            [disabled]="disabled()"
          />
          <label for="mothmanH">Mothman</label>
        </div>
      </div>

      <div class="error">required</div>
    </fieldset>

    <fieldset>
      <legend>Choose your favorite monster</legend>

      <div class="vertical">
        <div>
          <input
            type="radio"
            id="krakenV"
            name="monsterV"
            value="K"
            [disabled]="disabled()"
            required
          />
          <label for="krakenV">Kraken</label>
        </div>

        <div>
          <input
            type="radio"
            id="sasquatchV"
            name="monsterV"
            value="S"
            [disabled]="disabled()"
          />
          <label for="sasquatchV">Sasquatch</label>
        </div>

        <div>
          <input
            type="radio"
            id="mothmanV"
            name="monsterV"
            value="M"
            [disabled]="disabled()"
            required
          />
          <label for="mothmanV">Mothman</label>
        </div>
      </div>

      <div class="error">required</div>
    </fieldset>
  `,
  styles: ` 
    .horizontal {
      display: flex; 
      gap: 32px;
    }

    .vertical {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  `,
})
export class RadioComponent {
  disabled = input.required<boolean>();
}
