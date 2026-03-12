import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { categoryController } from "./category.controller";
import { createCategorySchema } from "./category.validation";


const router = Router();

router.post("/create", validateRequest(createCategorySchema), categoryController.createCategoryController);
router.get("/", categoryController.getAllCategoriesController);
router.put("/:id", validateRequest(createCategorySchema), categoryController.updateCategoryController);

export const categoryRoutes = router;