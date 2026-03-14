import { Router } from "express";
import { adminController } from "./admin.controller";
import { authenticate } from "../../middlewares/authenticate";
import { authorizeRole } from "../../middlewares/authorize";


const router = Router();

router.get("/all-users", authenticate, authorizeRole("ADMIN"), adminController.getAllUsersController);
router.put("/update-user-status", authenticate, authorizeRole("ADMIN"), adminController.updateUserStatusController);

export const adminRoutes = router;
