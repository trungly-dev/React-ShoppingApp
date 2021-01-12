import React from "react";
import PropTypes from "prop-types";
import "./Directory.scss";
import ShopWomen from "assets/shopWomen.jpg";
import ShopMen from "assets/shopMen.jpg";

Directory.propTypes = {};

function Directory(props) {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`,
          }}
        >
          <a>Shop Women</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`,
          }}
        >
          <a>Shop Men</a>
        </div>
      </div>
    </div>
  );
}

export default Directory;
