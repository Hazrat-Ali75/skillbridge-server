import { z } from "zod";

export const createReviewSchema = z.object({
    body: z.object({
        rating: z.number().min(1, "rating is required"),
        comment: z.string().optional(),
        studentId: z.string().min(1, "studentId is required"),
        tutorId: z.string().min(1, "tutorId is required"),
    })
});