import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { VarietypageComponent } from './varietypage/varietypage.component';

const routes: Routes = [ 
  {path:'' , redirectTo:'/' , pathMatch:'full' },
  {path: "about" , component : AboutpageComponent }, 
  {path: "home" , component: HomepageComponent},
  {path:"contact", component:ContactpageComponent},
  { path:"variety", component:VarietypageComponent},
  {path:"booking", component:BookingpageComponent},
  {path:"singup", component:SignupPageComponent},
  {path:"login", component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
