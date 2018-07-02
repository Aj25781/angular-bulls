import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChestComponent } from './exercises/chest/chest.component';
import {ExercisesComponent} from './exercises/exercises.component';
import { ShoulderComponent } from './exercises/shoulder/shoulder.component';
import { BicepsComponent} from './exercises/biceps/biceps.component';
import {TricepsComponent} from './exercises/triceps/triceps.component';
import {BackComponent} from './exercises/back/back.component';
import {LegsComponent} from './exercises/legs/legs.component';


const routes: Routes=[
{path: 'home', component: HomeComponent},
{path: 'exercises', component:ExercisesComponent},
{path: 'exercises/chest', component: ChestComponent},
{path: 'exercises/shoulder', component:ShoulderComponent},
{path: 'exercises/biceps', component:BicepsComponent},
{path: 'exercises/triceps', component:ShoulderComponent},
{path: 'exercises/back', component:ShoulderComponent},
{path: 'exercises/legs', component:ShoulderComponent}


];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent,ExercisesComponent, ChestComponent, ShoulderComponent, BicepsComponent,
TricepsComponent, BackComponent, LegsComponent];
