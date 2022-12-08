// // import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import PrevSeshDisplay from './components/PrevSeshDisplay';
import CurrSeshDisplay from './components/CurrSeshDisplay';

const MainContainer = ({ runData }) => {
  console.log('run data in main container', runData);
  return (
    <div className="mainContainer">
      <PrevSeshDisplay runData={runData} />
      <CurrSeshDisplay />
    </div>
  );
};

export default MainContainer;
