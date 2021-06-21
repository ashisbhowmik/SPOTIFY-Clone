import React, { useEffect } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user, token, discover_weekly, top_artists }, dispatch] =
    useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((_user) => {
        dispatch({
          type: "SET_USER",
          user: _user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("2gQhARF9fqj2uVvH1dQeo5").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
  }, []);

  // console.log("your weekly discover playlist is -> ", discover_weekly);
  // console.log("My top Artist is 😀😀", top_artists);
  // console.log("spotify is ✌✌", spotify);

  return (
    <>
      <div className="app">
        {token ? <Player spotify={spotify} /> : <Login />}
      </div>
    </>
  );
};

export default App;
