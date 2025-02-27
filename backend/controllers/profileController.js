import Profile from "../models/Profile.js";

export const submitProfile = async (req, res) => {
  try {
    const { firstName, lastName, dob, gender, email, phone, address } = req.body;

    const newProfile = new Profile({ firstName, lastName, dob, gender, email, phone, address });
    await newProfile.save();

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting form", error: error.message });
  }
};
