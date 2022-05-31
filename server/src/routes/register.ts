import { Request, Response } from "express";
import router from "./router";
import db from "../db";
import { hashPassword } from "../util";
import crypto from "crypto";
import { toUserJson } from "../util";
import { throwError } from "rxjs";
import { Prisma } from "@prisma/client";
router.post("/user", async (req: Request, res: Response) => {
    const passwordSalt = crypto.randomBytes(32).toString("base64");
    const passwordHash = await hashPassword(req.body.password, passwordSalt);
    try {
        const user = await db.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                subscription: req.body.subscription,
                passwordHash,
                passwordSalt,
            },
        });
        return res.json(toUserJson(user));
    } catch (e: any) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (e.code === "P2002") {
                console.log(
                    "There is a unique constraint violation, a new user cannot be created with this email"
                );
            }
        }
        return res.status(400).json("Email taken!");
    }
});

router.get("/users", async (req: Request, res: Response) => {
    try {
        const userInfo = await db.user.findMany();
        return res.json({
            success: true,
            data: userInfo,
        });
    } catch (error: unknown) {
        return res.json({
            success: false,
            message: error,
        });
    }
});
