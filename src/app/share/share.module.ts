import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiModule } from './ui/ui.module';
import { NzCardModule, NzGridModule, NzTabsModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    UiModule,
    NzGridModule,
    NzCardModule,
    NzTabsModule,
  ],
  exports: [
    UiModule,
    NzGridModule,
    NzCardModule,
    NzTabsModule,
    CommonModule
  ]
})
export class ShareModule { }
