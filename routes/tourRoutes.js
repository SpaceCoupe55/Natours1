const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();
// router.param('id', tourController.checkID);

router
  .route('/')
  .post(tourController.createTour)
  .get(tourController.getAllTours);

router
  .route('/:id')
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour)
  .get(tourController.getTour);

module.exports = router;
