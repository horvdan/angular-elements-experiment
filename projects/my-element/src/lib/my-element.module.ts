import { NgModule } from "@angular/core";
import { MyElementComponent } from "./my-element.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [MyElementComponent],
  imports: [CommonModule],
  exports: [MyElementComponent]
})
export class MyElementModule {}
