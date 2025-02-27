import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    dob: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    address: { type: String, required: true }
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
