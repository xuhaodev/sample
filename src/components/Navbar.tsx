"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRocket, FaRobot, FaAtom, FaBars, FaTimes } from "react-icons/fa";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  text: string;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 bg-black/20 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          科技创新节
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/aerospace" icon={<FaRocket className="mr-2" />} text="航天科技" />
          <NavLink href="/ai" icon={<FaRobot className="mr-2" />} text="人工智能" />
          <NavLink href="/quantum" icon={<FaAtom className="mr-2" />} text="量子计算" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {isOpen && (
          <div className="bg-gray-900/95 backdrop-blur-sm mt-4 p-4 rounded-lg shadow-xl">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/aerospace" icon={<FaRocket className="mr-2" />} text="航天科技" onClick={toggleMenu} />
              <MobileNavLink href="/ai" icon={<FaRobot className="mr-2" />} text="人工智能" onClick={toggleMenu} />
              <MobileNavLink href="/quantum" icon={<FaAtom className="mr-2" />} text="量子计算" onClick={toggleMenu} />
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  );
};

const NavLink = ({ href, icon, text }: NavLinkProps) => {
  return (
    <Link href={href} className="flex items-center text-gray-300 hover:text-white transition-colors">
      {icon}
      <span>{text}</span>
    </Link>
  );
};

const MobileNavLink = ({ href, icon, text, onClick }: MobileNavLinkProps) => {
  return (
    <Link 
      href={href} 
      className="flex items-center text-gray-300 hover:text-white transition-colors py-2"
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default Navbar;