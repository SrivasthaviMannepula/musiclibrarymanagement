import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './LoginAndRegister/register/register.component';
import { LoginComponent } from './LoginAndRegister/login/login.component';
import { AddMusicComponent } from './AddMusic/add-music/add-music.component';
import { UserProfileComponent } from './UserProfile/user-profile/user-profile.component';
import { PlaylistsComponent } from './Playlists/playlists/playlists.component';
import { SearchBarComponent } from './SearchBar/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddMusicComponent,
    UserProfileComponent,
    PlaylistsComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,SearchBarComponent]
})
export class AppModule { }
