## Bash url
```bash
   https://node-yt-music-yx.vercel.app/api/
```


1. Search for music:

   ```bash
   curl http://localhost:3000/search/musics?query=Never%20gonna%20give%20you%20up
   ```

2. Search for albums:

   ```bash
   curl http://localhost:3000/search/albums?query=Human%20after%20all
   ```

3. Search for playlists:

   ```bash
   curl http://localhost:3000/search/playlists?query=Jazz
   ```

4. Get music suggestions:

   ```bash
   curl http://localhost:3000/get/suggestions?youtubeId=YOUR_YOUTUBE_ID
   ```

5. Get songs from an album:

   ```bash
   curl http://localhost:3000/get/album-songs?albumId=YOUR_ALBUM_ID
   ```

6. Get songs from a playlist:

   ```bash
   curl http://localhost:3000/get/playlist-songs?playlistId=YOUR_PLAYLIST_ID
   ```

7. Search for artists:

   ```bash
   curl http://localhost:3000/search/artists?query=Daft%20Punk
   ```

8. Get an artist's information:

   ```bash
   curl http://localhost:3000/get/artist?artistId=YOUR_ARTIST_ID
   ```
