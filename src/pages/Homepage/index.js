import React from "react";
import PropTypes from "prop-types";
import Directory from "features/Directory";

Homepage.propTypes = {};

function Homepage(props) {
  //   const match = useRouteMatch();
  //   console.log(match);
  return (
    <div>
      <div className="homepage">
        <Directory />
      </div>
    </div>
  );
}

export default Homepage;
