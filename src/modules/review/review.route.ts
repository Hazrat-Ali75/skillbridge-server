import { Router } from "express";
import { reviewController } from "./review.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { createReviewSchema } from "./review.validation";
import { authenticate } from "../../middlewares/authenticate";
import { authorizeRole } from "../../middlewares/authorize";


const router = Router();

router.post("/create", authenticate, authorizeRole("STUDENT"), validateRequest(createReviewSchema), reviewController.createReviewController);

export const reviewRoute = router