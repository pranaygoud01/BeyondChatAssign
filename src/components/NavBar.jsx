import React, { useState } from 'react';
import Btns from './Btns';
import { Link } from 'react-router';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    setOpen(false); // Close the menu when logout is clicked
  };

  const menu = [
    { name: "Home", path: "/home", id: "1" },
    { name: "Integrate", path: "/setup", id: "2" },
    { name: "List of companies", path: "/setup", id: "3" }
  ];

  return (
    <div className="p-7 flex w-screen max-lg:py-5 max-lg:px-0">
      <div className="flex fixed justify-between px-10 max-lg:px-8 w-full items-center">
        <Link className="font-bold text-xl" to="/home">
          Beyond<span className="text-blue-500">Chats</span>
        </Link>
        
        
        <div className="max-lg:hidden">
          <Btns name="Home" path="/home" />
        </div>

        <button className="lg:hidden text-3xl z-50" onClick={handleClick}>
          {open ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="h-[230px] w-full bg-white fixed top-[60px] px-10 text-end py-5 lg:hidden shadow-md"
          >
            <ul className="flex flex-col font-bold text-xl text-end gap-5">
              {menu.map((item) => (
                <button
                  className="text-end"
                  onClick={handleClick}
                  key={item.id}
                >
                  <Link to={item.path}>{item.name}</Link>
                </button>
              ))}
            </ul>

         
            <Link
              to="/login"
              className="py-3 px-6 font-bold mt-4 bg-black text-white rounded-md inline-block"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
