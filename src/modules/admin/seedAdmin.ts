import { prisma } from "../../config/prisma";
import bcrypt from "bcrypt";
import { Role, Status } from "../../generated/prisma/enums";
import crypto from "crypto";

async function seedAdmin() {
    const adminEmail = "admin@skillbridge.com";
    const adminPassword = "admin@123";

    const existingAdmin = await prisma.user.findUnique({
        where: {
            email: adminEmail
        }
    })

    if (existingAdmin) {
        console.log("Admin already exists");
        return;
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    const admin = await prisma.user.create({
        data: {
            email: adminEmail,
            name: "Super Admin",
            role: Role.ADMIN,
            status: Status.ACTIVE,
            accounts: {
                create: {
                    id: crypto.randomUUID(),
                    accountId: crypto.randomUUID(),
                    providerId: "credential",
                    password: hashedPassword
                }
            }
        }
    })

    console.log("Admin created", admin);
}

seedAdmin()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });