const express = require('express');
const kycController = require('../controllers/kycController');

const kycRouter = express.Router();

kycRouter.post('/submit', kycController.submitKYC);
kycRouter.get('/user/:userId', kycController.getKYCByUserId);
kycRouter.put('/user/:userId/status', kycController.rejectKYCVerificationRequest);
kycRouter.put('/user/:userId/status', kycController.verifyKYCStatus);

module.exports = kycRouter;
