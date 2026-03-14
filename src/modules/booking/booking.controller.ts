import { Request, Response } from 'express'
import { bookingService } from './booking.service'

const createBookingController = async (req: Request, res: Response) => {
    try {
        const result = await bookingService.createBookingService(req.body)
        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            data: result
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to create booking",
            error: error,
        });
    }
}

const getAllBookingsController = async (req: Request, res: Response) => {
    try {
        const { id } = req.query;
        const result = await bookingService.getAllBookingsService(id as string)
        res.status(200).json({
            success: true,
            message: "Successfully retrieved all bookings",
            data: result
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve all bookings",
            error: error,
        });
    }
}

const getBookingByIdController = async (req: Request, res: Response) => {
    try {
        const result = await bookingService.getBookingByIdService(req.params.id as string)
        res.status(200).json({
            success: true,
            message: "Successfully retrieved booking",
            data: result
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve booking",
            error: error,
        });
    }
}

const updateBookingStatusController = async (req: Request, res: Response) => {
    try {
        const result = await bookingService.updateBookingStatusService(req.params.id as string, req.body.status as string)
        res.status(200).json({
            success: true,
            message: "Successfully updated booking status",
            data: result
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to update booking status",
            error: error,
        });
    }
}

export const bookingController = {
    createBookingController,
    getAllBookingsController,
    getBookingByIdController,
    updateBookingStatusController
}
