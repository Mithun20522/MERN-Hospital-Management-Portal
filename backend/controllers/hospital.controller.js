import Hospital from "../models/hospital.model.js";
export const createHospital = async(req, res) => {
    try {
        const {hospitalName, address, email, phone, category, description} = req.body;
        if(!hospitalName || !address || !email || !phone || !category || !description){
            return res.status(400).json({message:'All fields are mandatory'});
        }
        const hospital = await Hospital.findOne({email});
        if(hospital){
            return res.status(409).json({message:'Email already registered try with new one'});
        }
        const newHospital = new Hospital({
            hospitalName,
            address,
            email,
            phone,
            category,
            description
        });

        await newHospital.save();
        return res.status(201).json(newHospital);

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
export const getAllHospitals = async(req, res) => {
    try {
        const hospitals = await Hospital.find();
        if(!hospitals){
            return res.status(404).json({message:'No hospitals yet'});
        }
        return res.status(200).json(hospitals);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const getHospital = async(req, res) => {
    try {
        const {id} = req.params;
        const hospital = await Hospital.findById(id);
        if(!hospital){
            return res.status(404).json({message:'hospital not found'});
        }
        return res.status(200).json(hospital);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const deleteHospital = async(req, res) => {
    try {
        const {id} = req.params;
        const hospital = await Hospital.findByIdAndDelete(id);
        if(!hospital){
            return res.status(404).json({message:'hospital not found'});
        }
        return res.status(200).json({message:'hospital deleted successfully'});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const updateHospital = async(req, res) => {
    try {
        const {id} = req.params;
        const hospital = await Hospital.findByIdAndUpdate(id, req.body,{new:true});
        if(!hospital){
            return res.status(404).json({message:'hospital not found'});
        }
        return res.status(200).json({message:'hospital updated successfully'});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
