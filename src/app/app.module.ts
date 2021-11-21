import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MaterialModule } from './material/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './module/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    HttpClient,
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [MatDatepickerModule,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
