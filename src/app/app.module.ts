import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MotivationComponent } from './gallery/motivation/motivation.component';
import { TransformationComponent } from './gallery/transformation/transformation.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
   
    MotivationComponent,
    TransformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[HttpModule]
})
export class AppModule { }
