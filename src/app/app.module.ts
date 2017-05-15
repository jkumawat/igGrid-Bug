import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {IgniteUIModule} from 'igniteui-angular2';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IgniteUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
