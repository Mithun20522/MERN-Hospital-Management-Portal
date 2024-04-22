import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcrypt from 'bcryptjs';

export const register = async(req, res, next) => {
    try {
        const {firstName, lastName, age, gender, email, password, state} = req.body;
        if(!firstName || !lastName || !age || !gender || !email || !password || !state){
            return next(errorHandler(400, 'all field are mandatory'));
        }

        const user = await User.findOne({email});
        if(user){
            return next(errorHandler(409,'Email already registered'));
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const username = `${firstName.trim()}${lastName.trim()}`
        const newUser = new User({
            firstName,
            lastName,
            age,
            gender,
            email,
            password:hashedPassword,
            state,
            avatar: gender === 'male' ? `https://avatar.iran.liara.run/public/boy?username=${username}` : `https://avatar.iran.liara.run/public/girl?username=${username}`
        });

        await newUser.save();
        return res.status(201).json(newUser);

    } catch (error) {
        return next(errorHandler(500,error.message));
    }
}

export const login = async(req, res, next) => {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return next(errorHandler(400, 'all fields are mandatory'));
        }
        const user = await User.findOne({email});
        if(!user){
            return next(errorHandler(404, 'user not found'));
        }
        const validUser = bcrypt.compareSync(password, user.password);
        if(!validUser){
            return next(errorHandler(400, 'wrong credentials'));
        }
        const {password: pass, ...rest} = user._doc;
        return res.status(200).json(rest);

    } catch (error) {
        return next(errorHandler(500,error.message));
    }
}
