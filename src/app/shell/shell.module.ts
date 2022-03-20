import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppSelectorComponent } from './app-selector/app-selector.component';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ShellComponent,
    HeaderComponent,
    AppSelectorComponent
  ],
  exports: [
    ShellComponent
  ]
})
export class ShellModule { }
