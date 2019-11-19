import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MyCustomElementViewComponent } from "./my-custom-element-view.component";

const routes: Routes = [{ path: "", component: MyCustomElementViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCustomElementViewRoutingModule {}
