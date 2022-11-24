import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="data:image/jpeg;base64,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"
          alt="profile_img_tag"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Sonny Sangha</h2>
        <h4>sonny.sangha@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">228</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
