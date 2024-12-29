import React from "react";
import destinize from "../assets/destinize.png";
import Ecommerce from "../assets/Ecommerce.png";
import insta from "../assets/insta.png";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div className="container mx-auto p-8 sm:p-12">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Destinize Project */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-center">Destinize</h3>
          <img
            className="h-40 w-full object-cover rounded-md mb-4"
            src={destinize}
            alt="Destinize"
          />
          <h4 className="font-semibold mb-2">Technologies Used:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>HTML</li>
          </ul>
          <a
            href="https://intern-black-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 bg-slate-800 text-white text-center rounded-lg hover:bg-slate-700 transition-colors"
          >
            Get Live Demo
          </a>
        </div>

        {/* Ecommerce Project */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-center">Ecommerce</h3>
          <img
            className="h-40 w-full object-cover rounded-md mb-4"
            src={Ecommerce}
            alt="Ecommerce"
          />
          <h4 className="font-semibold mb-2">Technologies Used:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
          </ul>
          <a
            href="#"
            className="block px-4 py-2 bg-gray-400 text-white text-center rounded-lg cursor-not-allowed"
          >
            Demo Not Available
          </a>
        </div>

        {/* Instagram Clone Project */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Instagram Clone
          </h3>
          <img
            className="h-40 w-full object-cover rounded-md mb-4"
            src={insta}
            alt="Instagram Clone"
          />
          <h4 className="font-semibold mb-2">Technologies Used:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>HTML</li>
          </ul>
          <a
            href="#"
            className="block px-4 py-2 bg-gray-400 text-white text-center rounded-lg cursor-not-allowed"
          >
            Demo Not Available
          </a>
        </div>
      </div>

      {/* GitHub Section */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/sangammgr88"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
        >
          <FaGithub className="mr-2" /> See All Projects
        </a>
      </div>
    </div>
  );
};

export default Project;
