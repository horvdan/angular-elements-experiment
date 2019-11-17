import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomElementViewComponent } from './custom-element-view.component';

const routes: Routes = [{ path: '', component: CustomElementViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomElementViewRoutingModule { }
