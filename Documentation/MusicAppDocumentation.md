# Music Application Data Model Documentation

## 1. Users Table

- **Table Name**: `users`
- **Description**: Stores information about registered users of the music application.

| Column Name | Data Type        | Description                        |
|-------------|------------------|------------------------------------|
| username    | VARCHAR(25)      | User's username (Primary Key)      |
| fname       | VARCHAR(25)      | User's first name                   |
| lname       | VARCHAR(25)      | User's last name                    |
| password    | VARCHAR(64)      | User's password (hashed)           |

## 2. User Roles Table

- **Table Name**: `user_role`
- **Description**: Defines roles for users and their associations.

| Column Name | Data Type        | Description                                  |
|-------------|------------------|----------------------------------------------|
| username    | VARCHAR(25)      | User's username (Foreign Key to `users`)    |
| role_id     | INT(11)          | Role identifier (Foreign Key to `roles`)    |

## 3. Genres Table

- **Table Name**: `genres`
- **Description**: Stores music genres.

| Column Name | Data Type        | Description                                  |
|-------------|------------------|----------------------------------------------|
| genre_id    | INT(11)          | Genre identifier (Primary Key)              |
| genre_name  | VARCHAR(45)      | Name of the genre                            |

## 4. Artists Table

- **Table Name**: `artist`
- **Description**: Contains information about music artists.

| Column Name | Data Type        | Description                                  |
|-------------|------------------|----------------------------------------------|
| artist_id   | INT(11)          | Artist identifier (Primary Key)             |
| artist_name | VARCHAR(25)      | Name of the artist                           |

## 5. Albums Table

- **Table Name**: `albums`
- **Description**: Records details about music albums.

| Column Name   | Data Type        | Description                                       |
|---------------|------------------|---------------------------------------------------|
| album_id      | INT(11)          | Album identifier (Primary Key)                   |
| album_name    | VARCHAR(30)      | Name of the album                                 |
| release_year  | YEAR(4)          | Year of album release                            |
| album_length  | DOUBLE(5,2)      | Length of the album in minutes                   |
| num_of_songs  | INT(11)          | Number of songs in the album                     |
| artist_id     | INT(11)          | Artist identifier (Foreign Key to `artist`)      |

## 6. Publishers Table

- **Table Name**: `publisher`
- **Description**: Contains information about music publishers.

| Column Name    | Data Type        | Description                                   |
|----------------|------------------|-----------------------------------------------|
| publisher_id   | INT(11)          | Publisher identifier (Primary Key)           |
| publisher_name | VARCHAR(25)      | Name of the publisher                         |
| publisher_state| VARCHAR(25)      | State/Location of the publisher              |

## 7. Songs Table

- **Table Name**: `songs`
- **Description**: Stores data about individual songs.

| Column Name    | Data Type        | Description                                    |
|----------------|------------------|------------------------------------------------|
| song_id        | INT(11)          | Song identifier (Primary Key)                 |
| song_title     | VARCHAR(50)      | Title of the song                              |
| song_bpm       | INT(3)           | Beats per minute of the song                  |
| song_key       | CHAR(2)          | Key of the song                                |
| song_duration  | DOUBLE(4,2)      | Duration of the song in minutes               |
| release_year   | YEAR(4)          | Year of song release                           |
| genre_id       | INT(11)          | Genre identifier (Foreign Key to `genres`)    |
| publisher_id   | INT(11)          | Publisher identifier (Foreign Key to `publisher`) |
| album_id       | INT(11)          | Album identifier (Foreign Key to `albums`)    |

## 8. Playlists Table

- **Table Name**: `playlist`
- **Description**: Records user-created playlists.

| Column Name         | Data Type        | Description                                     |
|---------------------|------------------|-------------------------------------------------|
| playlist_id         | INT(11)          | Playlist identifier (Primary Key)              |
| playlist_name       | VARCHAR(25)      | Name of the playlist                            |
| playlist_description| VARCHAR(25)      | Description of the playlist                     |
| num_of_songs        | INT(3)           | Number of songs in the playlist                 |
| length_of_playlist  | DOUBLE(3,2)      | Total duration of the playlist in minutes       |
| username            | VARCHAR(25)      | User's username (Foreign Key to `users`)        |

## 9. Playlist-Song Association Table

- **Table Name**: `playlist_song`
- **Description**: Represents the songs within each playlist.

| Column Name    | Data Type        | Description                                   |
|----------------|------------------|-----------------------------------------------|
| song_id        | INT(11)          | Song identifier (Foreign Key to `songs`)     |
| playlist_id    | INT(11)          | Playlist identifier (Foreign Key to `playlist`)|

## 10. Favorites Table

- **Table Name**: `favorites`
- **Description**: Stores user's favorite songs.

| Column Name    | Data Type        | Description                                   |
|----------------|------------------|-----------------------------------------------|
| username       | VARCHAR(25)      | User's username (Foreign Key to `users`)     |
| song_id        | INT(11)          | Song identifier (Foreign Key to `songs`)     |

## 11. Artist-Song Association Table

- **Table Name**: `artist_song`
- **Description**: Represents the association between artists and songs.

| Column Name    | Data Type        | Description                                   |
|----------------|------------------|-----------------------------------------------|
| artist_id      | INT(11)          | Artist identifier (Foreign Key to `artist`)  |
| song_id        | INT(11)          | Song identifier (Foreign Key to `songs`)     |


## Endpoints:

1. `/home`: Displays the home page.
2. `/songDetailPage`: Displays the details of a song.
3. `/search`: Allows users to search for music.
4. `/playlists`: Displays all the playlists of the user.
5. `/playlists/playlist-name`: Displays a particular playlist.
6. `/register`: Registration page.
7. `/login`: Login page.
8. `/addMusic`: Allows users to add music and its details.
9. (Additional feature) `/userProfile`: User profile page.

## Angular Components:

1. `SidebarComponent`: A component for the sidebar navigation.
2. `HomeComponent`: The main component for the home page.
   - `SongCardComponent`: A component for displaying individual song cards.
3. `RegisterComponent`: The registration component.
4. `LoginComponent`: The login component.
5. `AddMusicComponent`: Component for adding music and its details.
6. `MusicPlayerComponent`: Component for playing music.
