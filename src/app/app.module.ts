import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import {RouterModule} from '@angular/router';
<<<<<<< HEAD


=======
import { LoginComponent } from './login/login.component';
import { MotivationComponent } from './gallery/motivation/motivation.component';
import { TransformationComponent } from './gallery/transformation/transformation.component';
>>>>>>> 8bfdcd5c070e4ac20a183a20d8ab946f0f319ef5

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
<<<<<<< HEAD
   
    
  
=======
    LoginComponent,
   
    MotivationComponent,
    TransformationComponent,
>>>>>>> 8bfdcd5c070e4ac20a183a20d8ab946f0f319ef5
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
