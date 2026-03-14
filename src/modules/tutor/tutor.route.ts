import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { createAvailabilitySlotSchema, updateTutorProfileSchema } from "./tutor.validation";
import { tutorController } from "./tutor.controller";
import { authenticate } from "../../middlewares/authenticate";
import { authorizeRole } from "../../middlewares/authorize";



const router = Router();

router.put("/update-profile", authenticate, authorizeRole("TUTOR"), validateRequest(updateTutorProfileSchema), tutorController.updateTutorProfileController);
router.post("/create-availability", authenticate, authorizeRole("TUTOR"), validateRequest(createAvailabilitySlotSchema), tutorController.createAvailabilitySlot);
router.get("/profile/:userId", tutorController.getTutorProfile);
router.get("/", tutorController.getAllTutors);

export const tutorRoutes = router;