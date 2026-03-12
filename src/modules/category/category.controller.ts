import { Request, Response } from "express";
import { categoryService } from "./category.service";

const createCategoryController = async (req: Request, res: Response) => {
    try {
        const result = await categoryService.createCategoryService(req.body as { name: string })
        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: result
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to create category",
            error: error,
        });
    }
}

const getAllCategoriesController = async (req: Request, res: Response) => {
    try {
        const result = await categoryService.getAllCategoriesService()
        res.status(200).json({
            success: true,
            message: "Successfully retrieved all categories",
            data: result
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve all categories",
            error: error,
        });
    }
}

const updateCategoryController = async (req: Request, res: Response) => {
    try {
        const result = await categoryService.updateCategoryService(req.params.id as string, req.body as { name: string })
        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            data: result
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to update category",
            error: error,
        });
    }
}

export const categoryController = {
    createCategoryController,
    getAllCategoriesController,
    updateCategoryController
}