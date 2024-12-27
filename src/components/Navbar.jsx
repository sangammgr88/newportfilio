import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  return (
    <div>
    <div className="mt-10 bg-white border rounded-xl h-16 py-4 w-96 mx-auto">
      <ul className="flex justify-center gap-10 text-black">
        <a href="#"
          className="text-2xl hover:text-blue-400 transition-transform transform hover:scale-110">
          <IoHomeOutline /></a>
        <a href="#" className="text-2xl hover:text-blue-400 transition-transform transform hover:scale-110"><CgProfile /></a>
       <a href="#" className="text-2xl hover:text-blue-400 transition-transform transform hover:scale-110"> <MdOutlineWorkOutline /></a>
        <a href="#" className="text-2xl hover:text-blue-400 transition-transform transform hover:scale-110" >
          <SiGmail /></a>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
