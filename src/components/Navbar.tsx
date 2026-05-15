"use client"
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const menuItems = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Service", href: "#services" },
        { label: "Resume", href: "/HammadGfx-CV.pdf", download: true },
        { label: "Project", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];
    const [selected, setSelected] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuClick = (label: string) => {
        setSelected(label);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="relative w-[calc(100%_-_32px)] max-w-[1298px] h-[66px] sm:h-[78px] lg:h-[86px] bg-[#171717] text-white px-5 sm:px-8 lg:px-2.5 rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] backdrop-blur-[15px] border border-white mx-auto flex items-center justify-between z-50">
            {/* Left Menu (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-start gap-2.5">
                {menuItems.slice(0, 3).map((item) => (
                    <a
                        key={item.label}
                        className={`w-[139px] h-[66px] flex items-center justify-center rounded-[60px] text-base font-medium transition duration-300 ${selected === item.label ? 'bg-[#FD853A] font-bold' : 'bg-transparent hover:bg-[#232323]'}`}
                        href={item.href}
                        download={item.download}
                        onClick={() => handleMenuClick(item.label)}
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            {/* Logo */}
            <a href="#home" onClick={() => handleMenuClick("Home")} className="flex flex-col items-center flex-shrink-0 cursor-pointer">
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-[#FD853A] rounded-full flex items-center justify-center mb-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <text x="2" y="18" fontSize="12" fontWeight="bold" fill="white">HG</text>
                    </svg>
                </div>
                <span className="font-bold text-sm sm:text-base lg:text-lg tracking-wide">HMGFX</span>
            </a>

            {/* Right Menu (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-end gap-4">
                {menuItems.slice(3).map((item) => (
                    <a
                        key={item.label}
                        className={`w-[139px] h-[66px] flex items-center justify-center rounded-[60px] text-base font-medium transition duration-300 ${selected === item.label ? 'bg-[#FD853A] font-bold' : 'bg-transparent hover:bg-[#232323]'}`}
                        href={item.href}
                        download={item.download}
                        onClick={() => handleMenuClick(item.label)}
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#FD853A] hover:bg-[#e67a2e] transition-colors"
                onClick={toggleMobileMenu}
            >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-[100%] left-0 right-0 mt-2 bg-[#171717] rounded-[25px] border border-white backdrop-blur-[15px] lg:hidden z-40">
                    <div className="flex flex-col p-4 gap-2">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                className={`w-full h-[50px] flex items-center justify-center rounded-[25px] text-base font-medium transition duration-300 ${selected === item.label ? 'bg-[#FD853A] font-bold' : 'bg-transparent hover:bg-[#232323]'}`}
                                href={item.href}
                                download={item.download}
                                onClick={() => handleMenuClick(item.label)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
