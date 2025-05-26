import { Component } from "@angular/core";

@Component({
  selector: "app-media",
  imports: [],
  template: `
    <ol class="definitions">
      <li>&lt;figure&gt;</li>
      <li>&lt;figcaption&gt;</li>
    </ol>
    <figure>
      <img src="./share.png" alt="Alt of image" />
      <figcaption>Description of image</figcaption>
    </figure>

    <hr />

    <ol class="definitions">
      <li>&lt;picture&gt;</li>
      <li>&lt;source&gt;</li>
    </ol>
    <picture>
      <source srcset="./theming.png" media="(min-width: 600px)" />
      <img src="./docs.png" alt="Alt of image" />
    </picture>
  `,
  styles: `
    .definitions {
      display: flex;
      gap: 15px;
      list-style: none;
      margin: 0 0 5px;
      padding: 0;
      font-size: var(--font__size-xs);

      & > li {
        background: #eee;
        padding: 0 5px;
      }
    }

    figure, picture { display: block; max-width: 400px; }
  `,
})
export class MediaComponent {}
