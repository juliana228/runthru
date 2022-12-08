const { Mileage } = require('../models/runModels');

const runController = {};

runController.getPrevRuns = async (req, res, next) => {
  try {
    res.locals.prevRuns = await Mileage.find();
    // console.log('results: ', results)
    return next();
  } catch (err) {
    return next({
      log: 'error finding previous runs',
      message: { err: 'error thrown in getPrevRun middleware' },
    });
  }
};

runController.postNewRun = async (req, res, next) => {
  // console.log(req.body);
  const {
    averageMileTime,
    date,
    mileage,
    perceivedExertion,
    totalTime,
    weather,
  } = req.body;
  // console.log(averageMileTime);
  const newRun = new Mileage({
    averageMileTime: averageMileTime,
    date: date,
    mileage: mileage,
    perceivedExertion: perceivedExertion,
    totalTime: totalTime,
    weather: weather,
  });
  try {
    // await console.log(newRun);
    await Mileage.create(newRun);
    return next();
  } catch (err) {
    return next({
      log: 'error posting a new run',
      message: { err: 'error thrown in postNewRun middleware' },
    });
  }
};

module.exports = runController;
