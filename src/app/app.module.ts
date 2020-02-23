import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';
import { ShareModule } from './share/share.module';
import { chartReducer } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { HomeDemoComponent } from './home-demo/home-demo.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeDemoComponent,
  ],
  imports: [
    PagesModule,
    ServicesModule,
    ShareModule,
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ chart: chartReducer, }),
    AppRoutingModule],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
