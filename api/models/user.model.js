import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
     type: String,
     default:"https://cdn3.iconfinder.com/data/icons/diversity-avatars-vol-2/64/afro-african-man-glasses-512.png"
    },
    // stopped at 3:23:04
},
{ timestamps:true });

const User = mongoose.model('User', userSchema);

export default User;