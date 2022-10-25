import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchFilmComponent } from './menu/search-film/search-film.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MenuComponent,
    SignUpComponent,
    UserProfileComponent,
    SearchFilmComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
