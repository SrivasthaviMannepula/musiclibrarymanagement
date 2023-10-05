import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlaylistPageComponent } from './AddMusic/create-playlist-page/create-playlist-page.component';
import { HomeComponent } from './HomePage/home/home.component';
import { SearchBarComponent } from './SearchBar/search-bar/search-bar.component';
import { LoginComponent } from './LoginAndRegister/login/login.component';
import { AddMusicComponent } from './AddMusic/add-music/add-music.component';

const routes: Routes = [
  { path: 'createplaylistpage', component: CreatePlaylistPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchBarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addmusic', component: AddMusicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
