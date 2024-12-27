import React from 'react'
import profile from '../assets/profile.jpg'
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";
const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ml-8 gap-8 mt-6">
      {/* Profile Section */}
      <div className="border rounded-2xl bg-white w-full max-w-sm p-6">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img className="h-32 w-32 rounded-full object-cover" src={profile} alt="Profile" />
        </div>

        {/* User Info */}
        <div className="text-center mb-4">
          <h1 className="font-extrabold text-3xl text-gray-900">Sangam Magar</h1>
          <p className="text-gray-600">Frontend Developer</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://github.com/sangammgr88" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <CgMail size={23} />
            <span>Sangamtmagar46@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={23} />
            <span>980000000</span>
          </div>
          <div className="flex items-center gap-2">
            <GrLocationPin size={23} />
            <span>Kathmandu, Shamakhusi</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-around mb-6">
          <button className="border bg-slate-900 text-white rounded-lg h-10 w-24 flex items-center justify-center">
            <a href="#">Hire Me <MdOutlineOpenInNew className="ml-2" /></a>
          </button>
          <button className="border bg-slate-900 text-white rounded-lg h-10 w-40 flex items-center justify-center">
            <a href="#">Download CV <MdOutlineFileDownload className="ml-2" /></a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;