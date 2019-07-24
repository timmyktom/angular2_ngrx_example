import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HomeModule } from './home/home.module';
import { BooksModule } from './books/books.module';
import { CarsModule } from './cars/cars.module';
import { AppRoutingModule } from './app.routing.module';

import { reducers } from './shared/reducers';
import { effects } from './shared/effects';

import { BookService } from './books/book.service';
import { CarService } from './cars/car.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, HomeModule, BooksModule, CarsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }):[]
  ],
  providers: [BookService, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
