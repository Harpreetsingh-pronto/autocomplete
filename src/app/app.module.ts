import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { MyAutocomplete }  from './components/autocomplete/app.autocomplete';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MyAutocomplete ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
