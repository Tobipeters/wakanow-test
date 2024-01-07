import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'sign-up', component: SignupComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'user-list', component: UserListComponent },

  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
