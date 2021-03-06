import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ElementLeftComponent } from './element-left/element-left.component';
import { ElementLeftBottomComponent } from './element-left-bottom/element-left-bottom.component';
import { ElementRightComponent } from './element-right/element-right.component';
import {DataForWidget} from './data-for-widget';
import { TextDegreePipe } from './text-degree.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ElementLeftComponent,
    ElementLeftBottomComponent,
    ElementRightComponent,
    TextDegreePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataForWidget],
  bootstrap: [AppComponent]
})
export class AppModule { }
