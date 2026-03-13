import { Router } from "express";
import { reviewController } from "./review.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { createReviewSchema } from "./review.validation";


const router = Router();

router.post("/create", validateRequest(createReviewSchema), reviewController.createReviewController);

export const reviewRoute = router