import User from '../models/user.model.js';

export const getAllUsers = async(req, res) => {
    try {
        const users = await User.find();
        if(!users){
            return res.status(404).json({message:'No users yet'});
        }
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const getUser = async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message:'user not found'});
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const deleteUser = async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message:'user not found'});
        }
        return res.status(200).json({message:'user deleted successfully'});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const updateUser = async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body,{new:true});
        if(!user){
            return res.status(404).json({message:'user not found'});
        }
        return res.status(200).json({message:'user updated successfully'});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
