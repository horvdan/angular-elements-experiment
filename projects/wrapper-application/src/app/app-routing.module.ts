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
      import("./my-element-view/my-element-view.module").then(
        m => m.MyElementViewModule
      )
  },
  {
    path: "my-custom-element",
    loadChildren: () =>
      import("./my-custom-element-view/my-custom-element-view.module").then(
        m => m.MyCustomElementViewModule
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
