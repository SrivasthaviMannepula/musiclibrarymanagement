import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './SideBar/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MusicbarComponent } from './MusicPlayer/musicbar/musicbar.component';
import { FormsModule } from '@angular/forms';
import { MusicCardComponent } from './HomePage/music-card/music-card.component';
import { PopularArtistCardComponent } from './HomePage/popular-artist-card/popular-artist-card.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
