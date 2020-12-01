import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnComponent } from './own.component';

const routes: Routes = [
  { component: OwnComponent, path: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnRoutingModule { }
