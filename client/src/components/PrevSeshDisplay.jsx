import React, { useState, useEffect } from 'react';
import PrevRun from './PrevRun';

const PrevSeshDisplay = ({ runData }) => {
  // console.log(runData);
  return (
    <div className="prevSeshContainer">
      <h2>Previous Runs</h2>
      <PrevRun runData={runData} />
    </div>
  );
};

export default PrevSeshDisplay;
