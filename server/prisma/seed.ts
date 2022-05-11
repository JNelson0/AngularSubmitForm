import db from "../src/db";
import { hashPassword } from "../src/util";

async function main() {
    const existingUser = await db.user.findUnique({
        where: {
            email: "email@email.com",
        },
    });

    if (existingUser) {
        return;
    }

    const user = await db.user.create({
        data: {
            email: "jaredlnelson1@gmail.com",
            passwordSalt: "salt",
            passwordHash: await hashPassword("password", "salt"),
            name: "Jared",
            subscription: "Pro",
        },
    });

    const user2 = await db.user.create({
        data: {
            email: "email2@email.com",
            passwordSalt: "salt2",
            passwordHash: await hashPassword("password", "salt2"),
            name: "Test",
            subscription: "Basic",
        },
    });
}

main()
    .then(() => {
        process.exit();
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
