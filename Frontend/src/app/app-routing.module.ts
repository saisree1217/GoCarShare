import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarrentalComponent } from './carrental/carrental.component';
import { CarpoolComponent } from './carpool/carpool.component';
import { CarlenderComponent } from './carlender/carlender.component';
import { CarlendeeComponent } from './carlendee/carlendee.component';


const routes: Routes = [
   { path: '', redirectTo: 'Login', pathMatch: 'full' },
   {  path:'Login', component:LoginSignupComponent},
  {  path: 'homepage', component: HomepageComponent },
  { path:'carrental',component:CarrentalComponent},
  {path:'carpool',component:CarpoolComponent},
  {path:'carlendee',component:CarlendeeComponent},
  {path:'carlender',component:CarlenderComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
