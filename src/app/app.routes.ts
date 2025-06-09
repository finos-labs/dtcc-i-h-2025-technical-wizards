import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },  // 👈 Default route goes to signup
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'layout', component: LayoutComponent }
];
