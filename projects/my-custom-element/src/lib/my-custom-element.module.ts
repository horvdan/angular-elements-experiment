import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { MyElementModule, MyElementComponent } from "my-element";

@NgModule({
  imports: [MyElementModule],
  entryComponents: [MyElementComponent]
})
export class MyCustomElementModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(MyElementComponent, { injector });
    customElements.define("my-custom-element", myElement);
  }
}
