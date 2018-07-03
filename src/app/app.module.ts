import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    FormsModule
=======
    RouterModule
>>>>>>> e19505898bd60f57b0107be2a9c3d36ba0063795
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[HttpModule]
})
export class AppModule { }
