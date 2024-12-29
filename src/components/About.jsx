import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5, FaFlutter } from "react-icons/fa6";
import { LuFigma } from "react-icons/lu";
import { SiAdobephotoshop } from "react-icons/si";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-16 gap-8">
      

      {/* About Me Section */}
      <div className="p-6 bg-white shadow-md rounded-lg h-96">
        <h1 className="text-2xl font-bold mb-6">About Me</h1>
        <p className="leading-relaxed text-gray-700">
          I’m Sangam Magar, a 20-year-old front-end developer studying BIT. With
          6 months of experience in React.js, I focus on building user-friendly
          web apps. My skills include HTML, CSS, JavaScript, Tailwind CSS, and
          WordPress. I’m passionate about projects relevant to Nepal and am
          currently developing an e-commerce website while aiming to grow into
          a full-stack developer.
        </p>
      </div>
      {/* Skills Section */}
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Skills</h1>
        <div className="grid grid-cols-4 gap-6 justify-items-center items-center">
          <IoLogoJavascript size={40} className="text-yellow-500" />
          <FaReact size={40} className="text-blue-500" />
          <RiTailwindCssFill size={40} className="text-teal-500" />
          <FaGithub size={40} className="text-gray-800" />
          <FaHtml5 size={40} className="text-orange-600" />
          <LuFigma size={40} className="text-purple-600" />
          <FaFlutter size={40} className="text-blue-400" />
          <SiAdobephotoshop size={40} className="text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default About;
