import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    const hashedPassword = await bcryptjs.hashSync(password, 12);
    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json({ message: 'Signup success!', newUser });
    } catch (error) {
        next(error)
    }
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw errorHandler(404, 'User not found!');
        }

        const isPasswordCorrect = await bcryptjs.compareSync(password, existingUser.password);
        if (!isPasswordCorrect) {
            throw errorHandler(401, 'Password is incorrect!');
        }

        const { password: hashedPassword, ...rest } = existingUser._doc;

        const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET);
        res //maxAge: 24 * 60 * 60 * 1000 = 1 day
            .cookie('access_token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
            .status(200)
            .json({ message: 'Signin success!', rest });

    } catch (error) {
        next(error);
    }
}