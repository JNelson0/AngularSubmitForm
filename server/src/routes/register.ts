import { Request, Response } from "express";
import router from "./router";
import db from "../db";
import { hashPassword } from "../util";
import crypto from "crypto";
import { toUserJson } from "../util";

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
    } catch (error: any) {
        if (error.meta.target[0] === "email") {
            throw Error("Email already in use");
        }
    }
});

router.get("/users", async (req: Request, res: Response) => {
    try {
        const userInfo = await db.user.findMany();
        return res.json({
            success: true,
            data: userInfo,
        });
    } catch (error: any) {
        return res.json({
            success: false,
            message: error,
        });
    }
});
