import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className=" bg-white border rounded-xl h-16 py-4 w-96 mx-auto">
        <ul className="flex justify-center gap-10 text-black">
          <li>
            <Link to="/" className="text-2xl hover:text-blue-400 transition-transform transform hover:scale-110">
              <IoHomeOutline />
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-2xl hover:text-blue-400 transition-transform transform hover:scale-110">
              <CgProfile />
            </Link>
          </li>
          <li>
            <Link to="/project" className="text-2xl hover:text-slate-900 transition-transform transform hover:scale-110">
              <MdOutlineWorkOutline />
            </Link>
          </li>
          <li>
            <Link to={"/Contact"}><button className="text-2xl hover:text-white transition-transform transform hover:scale-110 border rounded-lg bg-slate-900 text-white">
           Hire me
            </button></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
