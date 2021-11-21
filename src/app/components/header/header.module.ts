import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header.component';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class HeaderModule { }
