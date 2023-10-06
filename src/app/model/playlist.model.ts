export interface Song {

    songId: number;

    songTitle: string;

    songDuration: number;

    streams: number;

    genreId: Genre | null;

    albumId: Album;

    createdAt: string | null;

}



interface Genre {

    genreId: number;

    genreName: string;

}



interface Album {

    albumId: number;

    albumName: string;

    albumLength: number;

    numOfSongs: number;

    streams: number;

    artistId: Artist;

    createdAt: string;

}



interface Artist {

    id: number;

    name: string;

    password: string;

    role: string;

}