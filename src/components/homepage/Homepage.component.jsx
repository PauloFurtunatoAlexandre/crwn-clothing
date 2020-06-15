import React from "react";
import "./homepage.styles.scss";
import Directory from "../directory/Directory.component";

const HomePage = () => {
  return(
    <div className="homepage">
      <Directory />
    </div>
  );
}

export default HomePage;