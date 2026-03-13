import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { createAvailabilitySlotSchema, updateTutorProfileSchema } from "./tutor.validation";
import { tutorController } from "./tutor.controller";
import { authenticate } from "../../middlewares/authenticate";



const router = Router();

router.put("/update-profile", authenticate, validateRequest(updateTutorProfileSchema), tutorController.updateTutorProfileController);
router.post("/create-availability", validateRequest(createAvailabilitySlotSchema), tutorController.createAvailabilitySlot);
router.get("/profile/:userId", tutorController.getTutorProfile);
router.get("/", tutorController.getAllTutors);

export const tutorRoutes = router;