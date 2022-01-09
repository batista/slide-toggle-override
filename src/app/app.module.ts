import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { MaterialExampleModule } from '../material.module';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, SlideToggleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
