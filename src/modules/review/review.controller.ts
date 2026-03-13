import { reviewService } from "./review.service";
import { Request, Response } from "express";


const createReviewController = async (req: Request, res: Response) => {
    try {
        const result = await reviewService.createReviewService(req.body)
        res.status(201).json({
            success: true,
            message: "Review created successfully",
            data: result
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to create review",
            error: error,
        });
    }
}


export const reviewController = {
    createReviewController,
}
