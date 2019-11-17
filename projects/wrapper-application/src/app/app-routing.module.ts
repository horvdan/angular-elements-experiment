import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultViewComponent } from "./default-view/default-view.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: DefaultViewComponent
  },
  {
    path: "my-element",
    loadChildren: () =>
      import("./custom-element-view/custom-element-view.module").then(
        m => m.CustomElementViewModule
      )
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule {}
