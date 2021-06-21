import React, { useEffect } from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

const Footer = ({ spotify }) => {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();
  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      // console.log("result is", r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);
  // console.log("playing is ... ", playing);
  // console.log("item is ... ", item);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlaybackState().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
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
  };

  return (
    <div className="footer">
      <div className="footer__left">
        {item && (
          <img
            className="footer__albumLogo"
            src={item?.album.images[0].url}
            alt={item?.name}
          />
        )}

        {item ? (
          <div className="footer__songInfo">
            <h6>{item.name} </h6>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing </h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer__center">
        <div className="footer__upper">
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon
            // onClick={skipNext}
            className="footer__icon"
          />
          {playing ? (
            <PauseCircleOutlineIcon
              fontSize="large"
              className="footer__icon"
              onClick={handlePlayPause}
            />
          ) : (
            <PlayCircleFilledWhiteOutlinedIcon
              fontSize="large"
              className="footer__icon"
              // onClick={handlePlayPause}
            />
          )}
          <SkipNextIcon
            //  onClick={skipPrevious}
            className="footer__icon"
          />
          <RepeatIcon className="footer__green" />
        </div>
        <div className="footer__lower">
          <p className="time">0:00</p>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </div>
      </div>

      <div className="footer__right">
        <Grid container spacing={1}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
