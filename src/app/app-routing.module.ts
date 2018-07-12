import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChestComponent } from './exercises/chest/chest.component';
import { ShoulderComponent } from './exercises/shoulder/shoulder.component';
import { BicepsComponent} from './exercises/biceps/biceps.component';
import {TricepsComponent} from './exercises/triceps/triceps.component';
import {BackComponent} from './exercises/back/back.component';
import {LegsComponent} from './exercises/legs/legs.component';
import {SignupComponent} from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { MotivationComponent } from './gallery/motivation/motivation.component';
import { TransformationComponent } from './gallery/transformation/transformation.component';

import { CareersComponent } from './components/careers/careers.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ProductsComponent} from './components/products/products.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './admin/admin/admin.component';

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
{path: 'gallery/transformation',component:TransformationComponent},
{path: 'careers',component:CareersComponent},
{path: 'profile',component:ProfileComponent,canActivate:[AuthGuard]},
{path: 'products',component:ProductsComponent},
{path: 'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
{path: 'admin',component:AdminComponent}
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
ContactUsComponent,MotivationComponent,TransformationComponent,CareersComponent,ProfileComponent,ProductsComponent,DashboardComponent];

