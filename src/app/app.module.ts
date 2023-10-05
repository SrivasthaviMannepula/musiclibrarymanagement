import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './SideBar/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MusicbarComponent } from './MusicPlayer/musicbar/musicbar.component';
import { FormsModule } from '@angular/forms';
import { MusicCardComponent } from './HomePage/music-card/music-card.component';
import { PopularArtistCardComponent } from './HomePage/popular-artist-card/popular-artist-card.component';
import { RegisterComponent } from './LoginAndRegister/register/register.component';
import { LoginComponent } from './LoginAndRegister/login/login.component';
import { AddMusicComponent } from './AddMusic/add-music/add-music.component';
import { UserProfileComponent } from './UserProfile/user-profile/user-profile.component';
import { PlaylistsComponent } from './Playlists/playlists/playlists.component';
import { SearchBarComponent } from './SearchBar/search-bar/search-bar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MusicbarComponent,
    MusicCardComponent,
    PopularArtistCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RegisterComponent,
    LoginComponent,
    AddMusicComponent,
    UserProfileComponent,
    PlaylistsComponent,
    SearchBarComponent,
    AppComponent,
    SidebarComponent,
    MusicbarComponent,
    MusicCardComponent,
    PopularArtistCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent, SearchBarComponent]
})
export class AppModule { }
