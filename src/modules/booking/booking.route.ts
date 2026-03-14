import { Router } from "express";
import { createBookingSchema } from "./booking.validation";
import { bookingController } from "./booking.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { authorizeRole } from "../../middlewares/authorize";
import { authenticate } from "../../middlewares/authenticate";


const router = Router();

router.post('/create', validateRequest(createBookingSchema), authenticate, authorizeRole("STUDENT"), bookingController.createBookingController);
router.get('/', authenticate, bookingController.getAllBookingsController);
router.get('/:id', authenticate, bookingController.getBookingByIdController);
router.put('/:id', authenticate, authorizeRole("TUTOR", "STUDENT"), bookingController.updateBookingStatusController);

export const bookingRoutes = router;