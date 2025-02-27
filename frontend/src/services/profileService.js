import axios from "axios";

const API_URL = "http://localhost:5000/api/profiles"; 

// Create Profile (POST)
export const createProfile = async (profileData) => {
    try {
        const response = await axios.post(API_URL, profileData, {
            headers: { "Content-Type": "application/json" }
        });
        return response.data;
    } catch (error) {
        console.error("Error creating profile:", error);
        throw error;
    }
};

//  Fetch Profiles (GET)
export const getProfiles = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching profiles:", error);
        throw error;
    }
};
