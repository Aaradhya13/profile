import express from "express";
import Profile from "../models/Profile.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const profile = new Profile(req.body);
        await profile.save();
        res.status(201).json({ message: "Profile saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.json(profiles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
