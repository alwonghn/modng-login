import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  // {path: '**', component:LoginPageComponent},
  {path: 'login', component:LoginPageComponent},
  {path:'home', component:HomePageComponent},
  {path:'logout', component:LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
