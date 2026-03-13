import { prisma } from "../../config/prisma"

interface createReviewPayload {
    rating: number;
    comment?: string;
    studentId: string;
    tutorId: string;
    bookingId: string;
}

const createReviewService = async (payload: createReviewPayload) => {
    const result = await prisma.review.create({
        data: payload
    })
    return result
}


export const reviewService = {
    createReviewService,
}
