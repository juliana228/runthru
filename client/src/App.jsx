import React, { useState, useEffect } from 'react';
import './style.css';
import MainContainer from './MainContainer';
// import { json } from 'express';
// imports

const App = () => {
  const [runs, setRuns] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/')
      .then((data) => data.json())
      .then((runData) => {
        setRuns(runData);
      })
      .catch((err) => console.log('cannot get runData', err));
  }, []);

  return (
    <div>
      <MainContainer runData={runs} />
    </div>
  );
};

// .then((res) => res.json())
//         .then((data) => {
//           setRuns(data);
//           // console.log(data);
//         })
//         .catch((err) => {
//           console.log('error fetching run data');
//         });

export default App;
