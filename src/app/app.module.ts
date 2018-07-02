import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ChestComponent } from './exercises/chest/chest.component';
import { ShoulderComponent } from './exercises/shoulder/shoulder.component';
import { BicepsComponent } from './exercises/biceps/biceps.component';
import { TricepsComponent } from './exercises/triceps/triceps.component';
import { BackComponent } from './exercises/back/back.component';
import { LegsComponent } from './exercises/legs/legs.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ShoulderComponent,
    BicepsComponent,
    TricepsComponent,
    BackComponent,
    LegsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
