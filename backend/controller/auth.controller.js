
import UserModel from "../model/user.model.js";
import bcrypt from "bcryptjs";

export async function Register(req, res) {
    console.log("REGISTER CONTROLLER HIT");

    try {

        console.log("REQ BODY:", req.body);
        console.log("REQ FILE:", req.file);

        const profilePicture = req.file
            ? req.file.filename
            : "";

        const {
            name,
            username,
            email,
            password,
            age,
            gender,
            height,
            weight
        } = req.body;

        console.log("FIELDS RECEIVED");

        const UserExist = await UserModel.findOne({ email });

        console.log("USER CHECK DONE");

        if (UserExist) {
            return res.status(400).json({
                success: false,
                message: "User Already Exist"
            });
        }
        console.log("BEFORE BCRYPT");


        const hashpasword = await bcrypt.hash(password, 10);

console.log("AFTER BCRYPT");
        const user = await UserModel.create({
            name,
            username,
            email,
            password: hashpasword,
            age,
            gender,
            height,
            weight,
            profilePicture
        });

        console.log("USER CREATED");

        return res.status(201).json({
            success: true,
            message: "User Register Successfully",
            data: user
        });

    } catch (error) {

        console.log("REGISTER ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
}

