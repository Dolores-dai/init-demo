import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiModule } from './ui/ui.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    UiModule
  ],
  exports: [
    UiModule
  ]
})
export class ShareModule { }
