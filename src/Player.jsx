import React from "react";
import "./player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        {/* sidebar */}
        <Sidebar />

        {/* body */}
        <Body spotify={spotify} />
        {/* footer */}
      </div>
      <Footer spotify={spotify} />
    </div>
  );
};

export default Player;
