import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondFeatureComponent } from './second-feature.component';

const routes: Routes = [
  { component: SecondFeatureComponent, path: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondFeatureRoutingModule { }
