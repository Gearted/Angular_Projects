import { Routes } from '@angular/router';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';
import { UserComponent } from './user/user.component';


const ROUTES: Routes = [
  { path: 'SignUp', component: SignUpComponent },
  { path: 'UserProfile', component: UserProfileComponent },
];

export { ROUTES };