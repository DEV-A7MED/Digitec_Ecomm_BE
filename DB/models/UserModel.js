import mongoose, { Schema} from 'mongoose'; 

// Declare the Schema of the Mongo model
var userSchema = new Schema(
    {
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
}
);

//Export the model
const userModel=mongoose.models.User||mongoose.model('User', userSchema);
export default userModel;