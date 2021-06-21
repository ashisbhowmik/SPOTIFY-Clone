import React from "react";
import "./bodyheader.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDataLayerValue } from "./DataLayer";

const BodyHeader = ({ spotify }) => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt="ADd" src={user?.images[0].url} />
        <h4>{user ? user.display_name : <p>No Name</p>}</h4>
      </div>
    </div>
  );
};

export default BodyHeader;
