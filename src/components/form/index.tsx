
"use client"
import { useState, useEffect } from "react";

const DelayedForm = () => {
  const [showForm, setShowForm] = useState(true);  // Whether to show form
  const [loading, setLoading] = useState(false);    // Submission loading state
  const [success, setSuccess] = useState(null);     // Submission success state
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    mobile: "",
    requirements: "",
  });

  // Trigger form appearance after 5 seconds
  useEffect(() => {
    console.log("Setting timer for form appearance...");
    const timer = setTimeout(() => {
      setShowForm(true);  // Show form after delay
    }, 5000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null); // Reset status before submission
    
    try {
      const response = await fetch("/api/sendForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true); // Success message
        setFormData({
          name: "",
          companyName: "",
          email: "",
          mobile: "",
          requirements: "",
        });
      } else {
        setSuccess(false); // Failure message
      }
    } catch (error) {
      setSuccess(false); // Error handling
      console.error("Submission Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // If form is not yet visible, show loading message
  if (!showForm) {
    return <p className="text-center text-gray-500">Loading form...</p>;
  }

  return (
    <div>
      {showForm ? (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <form
            className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Submit Your Info</h2>
  
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="companyName">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="mobile">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="requirements">
                Requirements
              </label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-lg text-white font-bold ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
  
            {/* Success and failure messages */}
            {success === true && (
              <p className="mt-4 text-green-500 text-center">
                Form submitted successfully!
              </p>
            )}
            {success === false && (
              <p className="mt-4 text-red-500 text-center">
                Failed to submit the form. Please try again.
              </p>
            )}
          </form>
        </div>
      ) : (
        <p>No form available</p>
      )}
    </div>
  );
}

export default DelayedForm;
