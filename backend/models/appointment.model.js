import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    description:{
        type:String,
        required:true
    },
    hospitalName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    }
},{timestamps:true});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;