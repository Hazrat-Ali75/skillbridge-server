import { prisma } from "../../config/prisma";
import { Status } from "../../generated/prisma/enums";


const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const updateUserStatus = async (userId: string, status: string) => {
    const user = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            status: status as Status
        }
    })
    return user;
}

export const adminService = {
    getAllUsers,
    updateUserStatus
}