import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MyElementViewComponent } from "./my-element-view.component";

const routes: Routes = [{ path: "", component: MyElementViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyElementViewRoutingModule {}
