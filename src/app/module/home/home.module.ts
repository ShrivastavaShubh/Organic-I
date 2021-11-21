import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CarouselModule,
    CommonModule
  ]
})
export class HomeModule { }
