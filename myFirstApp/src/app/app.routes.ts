import { Routes } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { SearchFilmComponent } from './component/search-film/search-film.component';


const ROUTES: Routes = [
  { path: 'SignUp', component: SignUpComponent },
  { path: 'UserProfile', component: UserProfileComponent },
  {path: 'SearchFilm', component: SearchFilmComponent},
];

export { ROUTES };