import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedComponent,
    PageNotFoundComponent
  ], 
  exports: [
    PageNotFoundComponent
  ]
})
export class SharedModule { }
