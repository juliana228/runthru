const express = require('express');
const runController = require('../controllers/runController');
const router = express.Router();

router.get('/', runController.getPrevRuns, (req, res) =>
  res.status(200).json(res.locals.prevRuns)
);

router.post('/', runController.postNewRun, (req, res) => {
  res.status(200);
});

router.delete('/', runController.deleteRun, (req, res) => {
  res.status(200);
});

module.exports = router;
