import React, { useState, useEffect } from 'react';
import PrevSeshDisplay from './PrevSeshDisplay';

const PrevRun = ({ runData }) => {
  return (
    <div className="run">
      <p>Date: {runData.length !== 0 ? runData[0].date : ''}</p>
      <p>Mileage: {runData.length !== 0 ? runData[0].mileage : ''}</p>
      <p>
        Perceived Exertion:{' '}
        {runData.length !== 0 ? runData[0].perceivedExertion : ''}
      </p>
      <p>
        Average Mile Time:{' '}
        {runData.length !== 0 ? runData[0].averageMileTime : ''}
      </p>
      <p>Total Time: {runData.length !== 0 ? runData[0].totalTime : ''}</p>
      <p>Weather: {runData.length !== 0 ? runData[0].weather : ''}</p>
    </div>
  );
};

export default PrevRun;

// <div className="run">
//   <p>Date: {runData.length !== 0 ? runData[0].date : ''}</p>
//   <p>Mileage: {runData.length !== 0 ? runData[0].mileage : ''}</p>
//   <p>
//     Perceived Exertion:{' '}
//     {runData.length !== 0 ? runData[0].perceivedExertion : ''}
//   </p>
//   <p>
//     Average Mile Time: {runData.length !== 0 ? runData[0].averageMileTime : ''}
//   </p>
//   <p>Total Time: {runData.length !== 0 ? runData[0].totalTime : ''}</p>
//   <p>Weather: {runData.length !== 0 ? runData[0].weather : ''}</p>
// </div>;
