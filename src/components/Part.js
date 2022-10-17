import React from "react";

function Part({ path, top, height, zIndex, width }) {
  return (
    <img
      src={path}
      alt=""
      className="img-center"
      height={height}
      style={{ zIndex, top }}
      width={width}
    />
  );
}

export default Part;
