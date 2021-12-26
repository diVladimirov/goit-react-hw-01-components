import React from "react";
import PropTypes from "prop-types";

const AppsExtension = ({ textprop }) => {
  return <h2>{textprop}</h2>;
};

export default AppsExtension;

AppsExtension.propTypes = {
  textprop: PropTypes.string,
};
