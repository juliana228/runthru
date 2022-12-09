import React, { useState, useEffect } from 'react';
// import PrevSeshDisplay from './PrevSeshDisplay';
// import PrevSeshDisplay from './PrevSeshDisplay';
import PrevSeshDisplay from './PrevSeshDisplay';
import axios from 'axios';

const PrevRun = ({ runData }) => {
  // console.log(runData);
  const {
    date,
    mileage,
    perceivedExertion,
    averageMileTime,
    totalTime,
    weather,
    _id,
  } = runData;

  // const id = _id;
  // console.log(_id);
  const deleteRun = async () => {
    // await axios
    //   .delete('http://localhost:3000/api')
    //   .then((res) => console.log(res));
    // useEffect(() => {

    // })
    await axios.delete('http://localhost:3000/api', { data: { _id } });
    // await axios.delete(`http://localhost:3000/api/${_id}`);
    // axios
    //   .delete('http://localhost:3000/api')
    //   .then(() => (element.innerHTML = 'Delete successful'));
    // await fetch(`http://localhost:3000/api/${_id}`, {
    //   method: 'DELETE',
    // })
    //   .then((res) => console.log('delete successful'))
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // console.log('hello');
  };

  return (
    // <div className="run">
    //   <p>Date: {runData.length !== 0 ? runData[0].date : ''}</p>
    //   <p>Mileage: {runData.length !== 0 ? runData[0].mileage : ''}</p>
    //   <p>
    //     Perceived Exertion:{' '}
    //     {runData.length !== 0 ? runData[0].perceivedExertion : ''}
    //   </p>
    //   <p>
    //     Average Mile Time:{' '}
    //     {runData.length !== 0 ? runData[0].averageMileTime : ''}
    //   </p>
    //   <p>Total Time: {runData.length !== 0 ? runData[0].totalTime : ''}</p>
    //   <p>Weather: {runData.length !== 0 ? runData[0].weather : ''}</p>
    // </div>
    <div className="run">
      <p>Date: {date}</p>
      <p>Mileage: {mileage}</p>
      <p>Perceived Exertion: {perceivedExertion}</p>
      <p>Average Mile Time: {averageMileTime}</p>
      <p>Total Time: {totalTime}</p>
      <p>Weather: {weather}</p>
      <div className="buttonContainer">
        <button>Update</button>
        <button onClick={deleteRun}>Delete</button>
      </div>
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
