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
import { MusicCardComponent } from './HomePage/music-card/music-card.component';
import { PopularArtistCardComponent } from './HomePage/popular-artist-card/popular-artist-card.component';
import { MusicbarComponent } from './MusicPlayer/musicbar/musicbar.component';
import { SidebarComponent } from './SideBar/sidebar/sidebar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './HttpInterceptorService';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddMusicComponent,
    UserProfileComponent,
    PlaylistsComponent,
    SearchBarComponent,
    MusicCardComponent,
    PopularArtistCardComponent,
    MusicbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent, SearchBarComponent]
})
export class AppModule { }
