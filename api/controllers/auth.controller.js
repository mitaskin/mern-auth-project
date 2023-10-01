import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcryptjs.hashSync(password, 12);
    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json({ message: 'Signup success!', newUser });
    } catch (error) {
        next(error);
    }
}