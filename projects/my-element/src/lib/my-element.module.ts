import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { MyElementComponent } from "./my-element.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [MyElementComponent],
  imports: [CommonModule],
  exports: [MyElementComponent],
  entryComponents: [MyElementComponent]
})
export class MyElementModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(MyElementComponent, { injector });
    customElements.define("my-element", myElement);
  }
}
