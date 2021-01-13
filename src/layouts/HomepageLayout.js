import React from "react";
import Foooter from "../components/Footer";
import Header from "../components/Header";

function HomepageLayout(props) {
  return (
    <div>
      <Header {...props} />

      {props.children}

      <Foooter />
    </div>
  );
}

export default HomepageLayout;
