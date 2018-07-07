import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChestComponent } from './exercises/chest/chest.component';
import { ShoulderComponent } from './exercises/shoulder/shoulder.component';
import { BicepsComponent} from './exercises/biceps/biceps.component';
import {TricepsComponent} from './exercises/triceps/triceps.component';
import {BackComponent} from './exercises/back/back.component';
import {LegsComponent} from './exercises/legs/legs.component';
import {SignupComponent} from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {AboutUsComponent} from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { MotivationComponent } from './gallery/motivation/motivation.component';
import { TransformationComponent } from './gallery/transformation/transformation.component';

import { CareersComponent } from './careers/careers.component';

const routes: Routes=[
{path: '', redirectTo:'/home', pathMatch: 'full'},  
{path: 'home', component: HomeComponent},
{path: 'exercises/chest', component: ChestComponent},
{path: 'exercises/shoulder', component:ShoulderComponent},
{path: 'exercises/biceps', component:BicepsComponent},
{path: 'exercises/triceps', component:TricepsComponent},
{path: 'exercises/back', component:BackComponent},
{path: 'exercises/legs', component:LegsComponent},
{path: 'signup', component:SignupComponent},
{path: 'login', component:LoginComponent},
{path: 'about-us', component:AboutUsComponent},
{path: 'contact-us',component:ContactUsComponent},
{path: 'gallery/motivation',component:MotivationComponent},
{path: 'gallery/transformatio',component:TransformationComponent},
{path: 'careers',component:CareersComponent}

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

export const routingComponents = [HomeComponent, ChestComponent, ShoulderComponent, BicepsComponent,
TricepsComponent, BackComponent, LegsComponent, SignupComponent, LoginComponent,AboutUsComponent,
ContactUsComponent,MotivationComponent,TransformationComponent,CareersComponent];

