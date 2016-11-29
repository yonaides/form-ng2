import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MarcaCarsPipe} from './MarcaCarsPipe';
import {ModeloCarsPipe} from './ModeloCarsPipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaCarsPipe,
    ModeloCarsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
