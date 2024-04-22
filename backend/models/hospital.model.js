import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    hospitalName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    hospitalAvatar:{
        type:String,
        default:"https://static-00.iconduck.com/assets.00/hospital-emoji-256x256-316bdcdq.png"
    }
},{timestamps:true});

const Hospital = mongoose.model('Hospital', hospitalSchema);

export default Hospital;