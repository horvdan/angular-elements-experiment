import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MyElementViewRoutingModule } from "./my-element-view-routing.module";
import { MyElementViewComponent } from "./my-element-view.component";
import { MyElementModule } from "my-element";

@NgModule({
  declarations: [MyElementViewComponent],
  imports: [CommonModule, MyElementViewRoutingModule, MyElementModule]
})
export class MyElementViewModule {}
