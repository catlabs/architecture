import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstFeatureComponent } from './first-feature.component';

const routes: Routes = [
  { component: FirstFeatureComponent, path: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstFeatureRoutingModule { }
