import React, { useState } from "react";

const AddJob = () => {
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Job submitted successfully!");
  };

  return (
    <div className="p-8 bg-gray-900 text-white rounded-lg max-w-3xl mx-auto">
      <h2 className="text-3xl text-green-500 font-extrabold mb-6">Add Job</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Job Title */}
        <div>
          <label className="block mb-2">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 text-black rounded-lg"
            placeholder="Enter Job Title"
          />
        </div>

        {/* Job Location */}
        <div>
          <label className="block mb-2">Job Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 text-black rounded-lg"
            placeholder="Enter Job Location"
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block mb-2">Job Type</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full px-4 py-2 text-black rounded-lg"
          >
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
          </select>
        </div>

        {/* Job Category */}
        <div>
          <label className="block mb-2">Job Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 text-black rounded-lg"
            placeholder="Enter Job Category"
          />
        </div>

        {/* Application Deadline */}
        <div>
          <label className="block mb-2">Application Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            className="w-full px-4 py-2 text-black rounded-lg"
          />
        </div>

        {/* Salary Range */}
        <div>
          <label className="block mb-2">Salary Range (USD)</label>
          <div className="flex space-x-4">
            <input
              type="number"
              name="salaryMin"
              placeholder="Min"
              value={formData.salaryMin}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 text-black rounded-lg"
            />
            <input
              type="number"
              name="salaryMax"
              placeholder="Max"
              value={formData.salaryMax}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 text-black rounded-lg"
            />
          </div>
        </div>

        {/* Job Description */}
        <div>
          <label className="block mb-2">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 text-black rounded-lg"
            placeholder="Enter Job Description"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block mb-2">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 text-black rounded-lg"
            placeholder="Enter Company Name"
          />
        </div>

        {/* HR Name */}
        <div>
          <label className="block mb-2">HR Name</label>
          <input
            type="text"
            name="hrName"
            value={formData.hrName}
            onChange={handleChange}
            className="w-full px-4 py-2 text-black rounded-lg"
            placeholder="Enter HR Name"
          />
        </div>

        {/* HR Email */}
        <div>
          <label className="block mb-2">HR Email</label>
          <input
            type="email"
            name="hrEmail"
            value={formData.hrEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 text-black rounded-lg"
            placeholder="Enter HR Email"
          />
        </div>

        {/* Company Logo */}
        <div>
          <label className="block mb-2">Company Logo URL</label>
          <input
            type="url"
            name="companyLogo"
            value={formData.companyLogo}
            onChange={handleChange}
            className="w-full px-4 py-2 text-black rounded-lg"
            placeholder="Enter Logo URL"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddJob;
