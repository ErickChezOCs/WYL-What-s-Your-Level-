import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogicielsComponent } from './logiciels/logiciels.component';
import { DetailTestComponent } from './detail-test/detail-test.component';

@NgModule({
  declarations: [
    AppComponent,
    LogicielsComponent,
    DetailTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
