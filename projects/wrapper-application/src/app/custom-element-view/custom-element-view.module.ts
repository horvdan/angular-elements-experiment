import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomElementViewRoutingModule } from "./custom-element-view-routing.module";
import { CustomElementViewComponent } from "./custom-element-view.component";
import { MyElementModule } from "my-element";

@NgModule({
  declarations: [CustomElementViewComponent],
  imports: [CommonModule, CustomElementViewRoutingModule, MyElementModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomElementViewModule {}
