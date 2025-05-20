import { Component } from "@angular/core";

@Component({
  selector: "app-definition-list",
  imports: [],
  template: `
    <dl>
      <dt>Beast of Bodmin</dt>
      <dd>A large feline inhabiting Bodmin Moor.</dd>

      <dt>Morgawr</dt>
      <dd>A sea serpent.</dd>

      <dt>Owlman</dt>
      <dd>A giant owl-like creature.</dd>
    </dl>
  `,
  styles: ``,
})
export class DefinitionListComponent {}
