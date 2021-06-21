import React from "react";
import "./sidebar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  // console.log(playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideBarOption title="Home" Icon={HomeIcon} />
      <SideBarOption title="Search" Icon={SearchIcon} />
      <SideBarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists ? (
        playlists.items.map((playlist, index) => (
          <SideBarOption key={index} title={playlist.limits} />
        ))
      ) : (
        <SideBarOption title="NO DATA FOUND IN YOUR PLAYLIST" />
      )}

      {/* for debugging */}
      {/* {playlists ? (
        <SideBarOption title={playlists.limit} />
      ) : (
        console.log("no Data found in your playlist limit")
      )} */}
    </div>
  );
};

export default Sidebar;
