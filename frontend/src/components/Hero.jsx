import React, { useState } from "react";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const [profiles, setProfiles] = useState([]);
  const [showProfiles, setShowProfiles] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: emailRegex.test(e.target.value) ? "" : "Invalid email format",
      }));
    }

    if (e.target.name === "phone") {
      const phoneRegex = /^[0-9]{10}$/;
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: phoneRegex.test(e.target.value) ? "" : "Phone must be 10 digits",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errors.email && !errors.phone) {
      try {
        const response = await fetch("http://localhost:5000/api/profiles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          alert("Profile submitted successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            dob: "",
            gender: "",
            email: "",
            phone: "",
            address: "",
          });
        }
      } catch (error) {
        console.error("Error submitting profile:", error);
      }
    }
  };

  const fetchProfiles = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/profiles");
      if (response.ok) {
        const data = await response.json();
        setProfiles(data);
        setShowProfiles(true);
      }
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[600px]">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Profile Form</h2>
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          
          <div className="flex flex-col">
            <label className="text-gray-700 flex items-center">First Name <span className="text-red-500 ml-1">*</span></label>
            <input type="text" name="firstName" required placeholder="First Name" value={formData.firstName} onChange={handleChange} className="p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400" />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 flex items-center">Last Name</label>
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400" />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 flex items-center">Date of Birth <span className="text-red-500 ml-1">*</span></label>
            <input type="date" name="dob" required value={formData.dob} onChange={handleChange} className="p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400" />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 flex items-center">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400">
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 flex items-center">Email <span className="text-red-500 ml-1">*</span></label>
            <input type="email" name="email" required placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 flex items-center">Phone Number</label>
            <input type="tel" name="phone" placeholder="Phone" pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} className="p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400" />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="text-gray-700 flex items-center">Address <span className="text-red-500 ml-1">*</span></label>
            <textarea name="address" required placeholder="Address" value={formData.address} onChange={handleChange} className="p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-400"></textarea>
          </div>

          <div className="col-span-2 flex flex-col space-y-2">
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 w-full" disabled={errors.email || errors.phone}>
              Submit
            </button>
            <button type="button" onClick={fetchProfiles} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full">
              Show Profiles
            </button>
          </div>
        </form>
      </div>

      {showProfiles && (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-lg w-[600px]">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Submitted Profiles</h3>
          <ul className="divide-y divide-gray-300">
            {profiles.length > 0 ? (
              profiles.map((profile, index) => (
                <li key={index} className="py-2">
                  <p className="text-gray-700 font-medium">{profile.firstName} {profile.lastName}</p>
                  <p className="text-gray-600 text-sm">{profile.email} | {profile.phone}</p>
                  <p className="text-gray-600 text-sm">{profile.address}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-600 text-center">No profiles submitted yet.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
