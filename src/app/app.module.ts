import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BuiltInPipe } from './builtin_pipes';
import { AsyncPipe } from './async_pipes';
import { CustomPipe } from './custom_pipes';


@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipe,
    AsyncPipe,
    CustomPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
