import express from "express";
import {
  submitKYC,
  getKYCByUserId,
  rejectKYCVerificationRequest,
  verifyKYCStatus,
} from "../controllers/kycController.js";
import isLoggedIn from "../middlewares/auth.js";

const kycRouter = express.Router();

kycRouter.post("/submit", isLoggedIn, submitKYC);
kycRouter.get("/user/:userId", isLoggedIn, getKYCByUserId);
kycRouter.put(
  "/user/:userId/status",
  isLoggedIn,
  rejectKYCVerificationRequest
);
kycRouter.put("/user/:userId/status", isLoggedIn, verifyKYCStatus);

export default kycRouter;
