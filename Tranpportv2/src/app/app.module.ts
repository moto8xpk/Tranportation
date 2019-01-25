import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { MiddleModule } from './middle/middle.module';
import { MaterialLibraryModule } from './material-library/material-library.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    MiddleModule,
    MaterialLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
