import React, { useState, useEffect } from 'react';
import PrevRun from './PrevRun';

const PrevSeshDisplay = ({ runData }) => {
  // console.log(runData);
  const prevRuns = [];
  for (let i = 0; i < runData.length; i++) {
    prevRuns.push(
      <PrevRun
        key={i}
        runData={runData[i]}
        // date={runData[i].date}
        // mileage={runData[i].mileage}
        // perceivedExertion={runData[i].perceivedExertion}
        // averageMileTime={runData[i].averageMileTime}
        // totalTime={runData[i].totalTime}
        // weather={runData[i].weather}
      />
    );
  }

  return (
    <div className="prevSeshContainer">
      <h2>Previous Runs</h2>
      {prevRuns}
    </div>
  );
};

export default PrevSeshDisplay;
