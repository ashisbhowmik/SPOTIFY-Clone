import React from "react";
import "./songrow.css";
const SongRow = ({ track, playSong }) => {
  return (
    <div
      className="songRow"
      // onClick={() => playSong(track.id)}
    >
      <img src={track.album.images[0].url} alt="image not found" />
      <div className="songRow__info">
        <h5>{track.name}</h5>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}-
          {track.album.name}
        </p>
      </div>
    </div>
  );
};
export default SongRow;
