import React, { useState } from 'react';
import { RiMessageFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import profile from '../assets/profile.jpg'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-8 text-center">Contact Form</h2>

      <div className="flex gap-12 justify-center">
        {/* Form Section */}
        <div className="w-[600px] p-6 bg-white rounded-lg shadow-md"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your First Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Last Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="youremail@gmail.com"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
          <div className='flex'>
            <div>
          <img className='rounded-full h-28' src={profile} alt="" />
          </div>
          <div className='mt-7'>
          <p className="text-xl font-bold mb-2">Sangam Thapa Magar</p>
          <p className="text-sm text-gray-600 mb-4">Kathmandu, Nepal</p>
          </div>
          </div>

          <ul className="space-y-3">
            <li className="flex items-center gap-2 mt-6 ml-5">
              <RiMessageFill className="text-blue-500" />
              <a href="#" className="text-blue-500 hover:underline">Chat with me</a>
            </li>
            <li className="flex items-center gap-2 ml-5">
              <FaXTwitter className="text-blue-500" />
              <a href="#" className="text-blue-500 hover:underline">Follow me</a>
            </li>
            <li className="flex items-center gap-2 ml-5">
              <IoMdCall className="text-blue-500" />
              <a href="tel:+977-0000000000" className="text-blue-500 hover:underline">Call me</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
