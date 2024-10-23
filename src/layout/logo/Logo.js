import React from "react";
import LogoLight2x from "../../images/favicon.png";
import LogoDark2x from "../../images/favicon.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
      <div style={{ height: "100%", position: "relative" }}>
        <span
          className="logo-light logo-img"
          style={{ display: "flex", alignItems: "center", position: "absolute", top: 9 }}
        >
          <img style={{ width: 60, height: 60, objectFit: "cover" }} src={LogoLight2x} alt="logo" />
          <span style={{ fontSize: 17 }}>
            <span style={{ fontWeight: "bold" }}>Union</span>guardcapital
          </span>
        </span>
      </div>
      <div>
        <span className="logo-dark logo-img" style={{ display: "flex", alignItems: "center" }}>
          <img style={{ width: 60, height: 60, objectFit: "cover" }} src={LogoDark2x} alt="logo" />
          <span style={{ fontSize: 17 }}>
            <span style={{ fontWeight: "bold" }}>Union</span>guardcapital
          </span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;
