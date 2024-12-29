import React from "react";
import profile from "../assets/profile.jpg";
import { MdOutlineFileDownload, MdOutlineOpenInNew } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebookSquare, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { GrLocationPin } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  -mt-8">
      {/* Profile Card */}
      <div className="border rounded-2xl bg-white shadow-lg w-full max-w-md p-8">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            className="h-32 w-32 rounded-full object-cover shadow-md"
            src={profile}
            alt="Profile"
          />
        </div>

        {/* User Info */}
        <div className="text-center mb-6">
          <h1 className="font-extrabold text-3xl text-gray-900">Sangam Magar</h1>
          <p className="text-gray-600 text-lg">Frontend Developer</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/sangammgr88"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://x.com/SanGaM46re"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-500 hover:text-black-400 transition-colors"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sangam-magar-844aab260/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/SanGaM.MaGaR.46/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 transition-colors"
          >
            <FaFacebookSquare size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-400 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <CgMail size={24} className="text-gray-700" />
            <span className="text-gray-700">Sangamtmagar46@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt size={24} className="text-gray-700" />
            <span className="text-gray-700">9810330979</span>
          </div>
          <div className="flex items-center gap-3">
            <GrLocationPin size={24} className="text-gray-700" />
            <span className="text-gray-700">Kathmandu, Shamakhusi</span>
          </div>
        </div>
        <div className="mx-auto">
        <button className="border rounded-xl bg-green-400 w-48  text-wh flex items-center text-sm text-green-900 mb-4">
          <GoDotFill className="mr-2" />
          AVAILABLE FOR WORK
        </button>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-center gap-6">
          <Link to={"/Contact"} className="px-6 py-2 bg-slate-900 text-white rounded-lg flex items-center gap-2 hover:bg-slate-700 transition-colors"> Hire Me <MdOutlineOpenInNew /></Link>
         
          <a
            href="#"
            className="px-6 py-2 bg-slate-900 text-white rounded-lg flex items-center gap-2 hover:bg-slate-700 transition-colors"
          >
            Download CV <MdOutlineFileDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
