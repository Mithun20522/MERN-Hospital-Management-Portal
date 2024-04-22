import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const register = async(req, res, next) => {
    try {
        const {firstName, lastName, age, gender, email, password, state} = req.body;
        if(!firstName || !lastName || !age || !gender || !email || !password || !state){
            return res.status(400).json({message:'all fields are mandatory'});
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(409).json({message:'Email already registered'});
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
        return res.status(500).json({message:error.message})
    }
}

export const login = async(req, res, next) => {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message:'all fields are mandatory'});
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message:'No user found'});
        }
        const validUser = bcrypt.compareSync(password, user.password);
        if(!validUser){
            return res.status(400).json({message:'wrong credentials'});
        }
        const token = jwt.sign({_id:user._id, isAdmin:user._isAdmin}, process.env.JWT_SECRET_KEY, {expiresIn:'1d'});
        res.cookie('access_token', token, {httpOnly:true});

        const {password: pass, ...rest} = user._doc;
        return res.status(200).json(rest);

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const logout = async(req, res, next) => {
    try {

        res.clearCookie('access_token');
        return res.status(200).json({message:'logout successfully'});
    } catch (error) {
        return res.status(500).json({message:error.message}) 
    }
}