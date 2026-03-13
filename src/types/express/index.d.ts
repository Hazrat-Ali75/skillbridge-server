import { express } from "express"

declare global {
    namespace Express {
        interface UserPayload {
            id: string;
            email: string;
            role: "STUDENT" | "TUTOR" | "ADMIN";
            status: "ACTIVE" | "BANNED";
        }

        interface Request {
            user: UserPayload;
        }
    }
}

export { }
