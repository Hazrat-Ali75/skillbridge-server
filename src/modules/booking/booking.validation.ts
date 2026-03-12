import z from "zod";


export const createBookingSchema = z.object({
    body: z.object({
        studentId: z.string().min(1, "studentId is required"),
        tutorId: z.string().min(1, "tutorId is required"),
        sessionDate: z.coerce.date().min(1, "date is required"),
        duration: z.number().min(1, "duration is required"),
    })
})

