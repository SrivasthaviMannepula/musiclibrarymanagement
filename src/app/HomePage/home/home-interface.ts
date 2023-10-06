
export interface ReceivedSong {

    songId: number;

    songTitle: string;

    songDuration: number;

    streams: number;

    genreId: Genre;

    albumId: Album;

    createdAt: Date;

}



export interface Genre {

    genreId: number;

    genreName: string;

}





export interface Album {

    albumId: number;

    albumTitle: string;

    artistName: User;

    releaseDate: Date;



}





export interface User {

    id: number;

    name: string;

    password: string;

    role: string;

}



