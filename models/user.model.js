import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String
})

const User = new mongoose.model('User', userSchema)

export default User