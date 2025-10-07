import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logoImage from "../assets/logo.png";
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="mx-auto max-w-[1700px] px-4">
        <div className="navbar">
          <div className="navbar-start flex items-center gap-2">
            <div className="dropdown lg:hidden">
  <label tabIndex={0} className="btn btn-ghost dropdown-toggle">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
  </label>
  <ul tabIndex={0} className="dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-0 shadow flex flex-col">
    {["/", "/applications", "/installation"].map((path, idx) => {
      const names = ["Home", "Apps", "Installation"];
      return (
        <li key={idx}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `inline-block px-2 text-base font-medium py-0 ${
                isActive
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-b-2 border-purple-500"
                  : "text-gray-700 hover:text-gray-900"
              }`
            }
          >
            {names[idx]}
          </NavLink>
        </li>
      );
    })}
  </ul>
</div>
              <div className="flex items-center gap-1">
                <Link to="/"><img src={logoImage} alt="Logo" className="h-10 w-10 rounded-full" /></Link>
              <Link to="/" className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</Link>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-4 p-0 m-0">
              {["/", "/applications", "/installation"].map((path, idx) => {
                const names = ["Home", "Apps", "Installation"];
                return (
                  <li key={idx}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `inline-block px-2 text-base font-medium py-0 ${
                          isActive
                            ? "bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-b-2 border-purple-500"
                            : "text-gray-700 hover:text-gray-900"
                        }`
                      }
                    >
                      {names[idx]}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="navbar-end">
           <Link
      to ="https://github.com/dashboard" 
      target="_blank"
      rel="noopener noreferrer"
      className="btn flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg"
    >
      <FontAwesomeIcon icon={faGithub} className="text-xl" />
      Contribute
    </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
