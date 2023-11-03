import express from 'express';

import {
    searchMusics,
    searchAlbums,
    searchPlaylists,
    getSuggestions,
    listMusicsFromAlbum,
    listMusicsFromPlaylist,
    searchArtists,
    getArtist,
} from 'node-youtube-music';

const app = express();
const port = 3000; // You can use any port you prefer

app.use(express.json());

// Define your API endpoints
app.get('/api/search/musics', async (req, res) => {
    try {
        const query = req.query.query || 'Never gonna give you up';
        const musics = await searchMusics(query);
        res.json(musics);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/api/search/albums', async (req, res) => {
    try {
        const query = req.query.query || 'Human after all';
        const albums = await searchAlbums(query);
        res.json(albums);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/api/search/playlists', async (req, res) => {
    try {
        const query = req.query.query || 'Jazz';
        const playlists = await searchPlaylists(query);
        res.json(playlists);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/api/get/suggestions', async (req, res) => {
    try {
        const youtubeId = req.query.youtubeId || 'YOUR_DEFAULT_YOUTUBE_ID';
        const suggestions = await getSuggestions(youtubeId);
        res.json(suggestions);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/api/get/album-songs', async (req, res) => {
    try {
        const albumId = req.query.albumId || 'YOUR_DEFAULT_ALBUM_ID';
        const albumSongs = await listMusicsFromAlbum(albumId);
        res.json(albumSongs);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/api/get/playlist-songs', async (req, res) => {
    try {
        const playlistId = req.query.playlistId || 'YOUR_DEFAULT_PLAYLIST_ID';
        const playlistSongs = await listMusicsFromPlaylist(playlistId);
        res.json(playlistSongs);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/api/search/artists', async (req, res) => {
    try {
        const query = req.query.query || 'Daft Punk';
        const artists = await searchArtists(query);
        res.json(artists);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/api/get/artist', async (req, res) => {
    try {
        const artistId = req.query.artistId || 'YOUR_DEFAULT_ARTIST_ID';
        const artist = await getArtist(artistId);
        res.json(artist);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
