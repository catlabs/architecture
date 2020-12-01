import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'own-feature',
    loadChildren: () => import('./own/own.module').then(m => m.OwnModule)
  },
  {
    path: 'first-feature',
    loadChildren: () => import('projects/lib/src/first-feature/first-feature.module').then(m => m.FirstFeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
