import React from "react";
import Foooter from "../components/Footer";
import Header from "../components/Header";

function MainLayout(props) {
  return (
    <div>
      <Header />
      <div className="main">{props.children}</div>
      <Foooter />
    </div>
  );
}

export default MainLayout;
