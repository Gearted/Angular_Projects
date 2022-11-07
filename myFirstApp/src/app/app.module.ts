import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchFilmComponent } from './component/search-film/search-film.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './component/highlight.directive';
import { CreateOnamatopiaComponentComponent } from './component/create-onamatopia-component/create-onamatopia-component.component';
import { OnomatopeiaComponent } from './component/onomatopeia/onomatopeia.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MenuComponent,
    SignUpComponent,
    UserProfileComponent,
    SearchFilmComponent,
    HighlightDirective,
    CreateOnamatopiaComponentComponent,
    OnomatopeiaComponent,
   
    
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
