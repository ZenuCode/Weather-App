import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    HomePageComponent,
    DetailsComponent,
  ]
})
export class SharedModule { }
