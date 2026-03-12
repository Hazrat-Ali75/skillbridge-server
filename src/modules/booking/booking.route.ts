import { Router } from "express";
import { createBookingSchema } from "./booking.validation";
import { bookingController } from "./booking.controller";
import { validateRequest } from "../../middlewares/validateRequest";


const router = Router();

router.post('/create', validateRequest(createBookingSchema), bookingController.createBookingController);
router.get('/', bookingController.getAllBookingsController);
router.get('/:id', bookingController.getBookingByIdController);

export const bookingRoutes = router;