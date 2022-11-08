import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div>
      <ClimbingBoxLoader
        color="#ff00d9"
        size={30}
      />
    </div>
  );
};

export default Loader;