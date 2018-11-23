import React from "react";

import "./styles.css";

const Picture = ({ src }) => {
  if (!src) {
    return <div className="picture empty" />;
  }
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className="picture"
      alt=""
    />
  );
};

export default Picture;
