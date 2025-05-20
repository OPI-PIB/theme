import { Component } from "@angular/core";

@Component({
  selector: "app-media",
  imports: [],
  template: `
    <p>&lt;figure&gt; &lt;figcaption&gt;</p>
    <figure>
      <img src="./share.png" alt="Alt of image" />
      <figcaption>Description of image</figcaption>
    </figure>

    <p>&lt;picture&gt; &lt;source&gt;</p>
    <picture>
      <source srcset="./theming.png" media="(min-width: 600px)" />
      <img src="./docs.png" alt="Alt of image" />
    </picture>
  `,
  styles: ``,
})
export class MediaComponent {}
