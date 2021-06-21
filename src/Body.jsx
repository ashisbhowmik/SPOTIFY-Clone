import React from "react";
import "./body.css";
import BodyHeader from "./BodyHeader";
import { useDataLayerValue } from "./DataLayer";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:2gQhARF9fqj2uVvH1dQeo5`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body">
      <BodyHeader spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="not found" />
        <div className="body__infoText">
          <strong>PLAYLISTS</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayArrowSharpIcon
            fontSize="large"
            className="body__shuffle"
            // onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* list of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow
            //  playSong={playSong}
            track={item.track}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
