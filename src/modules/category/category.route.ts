import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { categoryController } from "./category.controller";
import { createCategorySchema } from "./category.validation";
import { authenticate } from "../../middlewares/authenticate";
import { authorizeRole } from "../../middlewares/authorize";


const router = Router();

router.post("/create", authenticate, authorizeRole("ADMIN"), validateRequest(createCategorySchema), categoryController.createCategoryController);
router.get("/", categoryController.getAllCategoriesController);
router.put("/:id", authenticate, authorizeRole("ADMIN"), validateRequest(createCategorySchema), categoryController.updateCategoryController);

export const categoryRoutes = router;