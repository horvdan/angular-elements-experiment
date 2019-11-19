import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MyCustomElementViewRoutingModule } from "./my-custom-element-view-routing.module";
import { MyCustomElementViewComponent } from "./my-custom-element-view.component";
import { MyCustomElementModule } from "my-custom-element";

@NgModule({
  declarations: [MyCustomElementViewComponent],
  imports: [
    CommonModule,
    MyCustomElementViewRoutingModule,
    MyCustomElementModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyCustomElementViewModule {}
