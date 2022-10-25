import { Routes } from '@angular/router';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';
import { SearchFilmComponent } from './menu/search-film/search-film.component';


const ROUTES: Routes = [
  { path: 'SignUp', component: SignUpComponent },
  { path: 'UserProfile', component: UserProfileComponent },
  {path: 'SearchFilm', component: SearchFilmComponent},
];

export { ROUTES };