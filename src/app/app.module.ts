import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartasComponent } from './cartas/cartas.component';
import { HomeComponent } from './home/home.component';

import {RoutingModule } from './app.router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TimerComponent } from './timer/timer.component';




@NgModule({
  declarations: [
    AppComponent,
    CartasComponent,
    HomeComponent,
    TimerComponent
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
