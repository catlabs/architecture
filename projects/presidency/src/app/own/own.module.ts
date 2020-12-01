import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnRoutingModule } from './own-routing.module';
import { OwnComponent } from './own.component';


@NgModule({
  declarations: [OwnComponent],
  imports: [
    CommonModule,
    OwnRoutingModule
  ]
})
export class OwnModule { }
