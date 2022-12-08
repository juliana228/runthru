import React, { useState, useEffect } from 'react';

const CurrRun = () => {
  const [date, setDate] = useState('');
  const [mileage, setMileage] = useState('');
  const [perceivedExertion, setPE] = useState('');
  const [averageMileTime, setAMT] = useState('');
  const [totalTime, setTT] = useState('');
  const [weather, setWeather] = useState('');

  const dataBody = {
    averageMileTime: averageMileTime,
    date: date,
    mileage: mileage,
    perceivedExertion: perceivedExertion,
    totalTime: totalTime,
    weather: weather,
  };
  console.log(dataBody);

  const addRun = () => {
    fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataBody),
      mode: 'cors',
    })
      .then((data) => console.log('post success'))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    addRun();
    event.preventDefault();
  };

  return (
    <div className="currRun">
      <form onSubmit={handleSubmit} method="POST">
        <label>
          Date:
          <input
            id="test"
            type="text"
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <br />
        <label>
          Mileage:
          <input
            type="text"
            onChange={(event) => setMileage(event.target.value)}
          />
        </label>
        <br />
        <label>
          Perceived Exertion:
          <select
            name="exertion"
            id="exertion"
            onChange={(event) => setPE(event.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="neutral">Neutral</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <br />
        <label htmlFor="">
          Average Mile Time:
          <input type="text" onChange={(event) => setAMT(event.target.value)} />
        </label>
        <br />
        <label htmlFor="">
          Total Time:
          <input type="text" onChange={(event) => setTT(event.target.value)} />
        </label>
        <br />
        <label htmlFor="">
          Weather:
          <select
            name="weather"
            id="weather"
            onChange={(event) => setWeather(event.target.value)}
          >
            <option value="hot">Hot</option>
            <option value="cold">Cold</option>
            <option value="comfortable">Comfortable</option>
            <option value="humid">Humid</option>
          </select>
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default CurrRun;
