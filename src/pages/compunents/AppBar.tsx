import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Mainlogo from '../logs/GowriTekLogo.png';

interface AppBarProps {
  menuItems?: { label: string; href: string }[];
}

const AppBar: React.FC<AppBarProps> = ({
  menuItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ]
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed AppBar */}
      <div className="fixed top-0 left-0 right-0 bg-black text-white px-6 py-4 flex items-center justify-between z-50 h-16 ">
        {/* Blue Gradient Overlay for AppBar */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(0deg, rgba(0, 255, 255, 0.2) 0%, rgba(0, 150, 255, 0.15) 50%, rgba(0, 100, 200, 0.1) 100%)',
          }}
        />
        
        <img src={Mainlogo} alt="GowriTek Logo" className="h-12 w-auto relative z-10" />
        
        {/* Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="text-white hover:text-cyan-400 transition-all duration-300 p-1 relative z-10"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Blue Gradient Overlay for Mobile Menu */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(0deg, rgba(192, 220, 220, 0.3) 0%, rgba(0, 150, 255, 0.2) 30%, rgba(0, 100, 200, 0.1) 60%, transparent 100%)',
          }}
        />
        
        <div className="flex items-center justify-between px-6 py-4 relative z-10">
          <img src={Mainlogo} alt="GowriTek Logo" className="h-12 w-auto" />
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-cyan-400"
          >
            <X size={28} />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center h-full space-y-6 relative z-10">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleMenuItemClick}
              className="text-2xl text-white hover:text-cyan-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppBar;