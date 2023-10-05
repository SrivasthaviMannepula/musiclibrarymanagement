// album.model.ts
export interface Song {
    songTitle: string;
    songDuration: number;
    streams: number;
    genreId: number;
}

export interface Album {
    albumName: string;
    albumLength: number;
    numOfSongs: number;
    streams: number;
    albumSongs: Song[];
}