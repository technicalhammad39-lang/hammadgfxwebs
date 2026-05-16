"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

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
    const [isNavVisible, setIsNavVisible] = useState(true);
    const lastScrollY = useRef(0);
    const scrollStopTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const showAfterScrollStops = () => {
            if (scrollStopTimer.current) {
                clearTimeout(scrollStopTimer.current);
            }

            scrollStopTimer.current = setTimeout(() => {
                setIsNavVisible(true);
            }, 180);
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 12 || currentScrollY < lastScrollY.current - 2) {
                setIsNavVisible(true);
            } else if (currentScrollY > lastScrollY.current + 2) {
                setIsNavVisible(false);
                setIsMobileMenuOpen(false);
            }

            lastScrollY.current = currentScrollY;
            showAfterScrollStops();
        };

        const handleWheel = (event: WheelEvent) => {
            if (event.deltaY > 0) {
                setIsNavVisible(false);
                setIsMobileMenuOpen(false);
            } else if (event.deltaY < 0) {
                setIsNavVisible(true);
            }

            showAfterScrollStops();
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('wheel', handleWheel, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
            if (scrollStopTimer.current) {
                clearTimeout(scrollStopTimer.current);
            }
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuClick = (label: string) => {
        setSelected(label);
        setIsMobileMenuOpen(false);
        setIsNavVisible(true);
    };

    return (
        <>
        <nav className={`fixed left-1/2 top-4 sm:top-6 w-[calc(100%_-_32px)] max-w-[1298px] h-[58px] sm:h-[64px] md:h-[66px] lg:h-[72px] bg-[#171717] text-white px-5 sm:px-8 md:px-2.5 rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] backdrop-blur-[15px] border border-white mx-auto flex items-center justify-between z-50 transition-transform duration-300 ease-out -translate-x-1/2 ${isNavVisible ? 'translate-y-0' : '-translate-y-[140%]'}`}>
            {/* Left Menu (Desktop) */}
            <div className="hidden md:flex flex-1 justify-start gap-1 lg:gap-2.5">
                {menuItems.slice(0, 3).map((item) => (
                    <a
                        key={item.label}
                        className={`w-[90px] lg:w-[128px] h-[50px] lg:h-[56px] flex items-center justify-center rounded-[60px] text-sm lg:text-base font-medium transition duration-300 ${selected === item.label ? 'bg-[#FD853A] font-bold' : 'bg-transparent hover:bg-[#232323]'}`}
                        href={item.href}
                        download={item.download}
                        onClick={() => handleMenuClick(item.label)}
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            {/* Logo */}
            <a href="#home" onClick={() => handleMenuClick("Home")} className="flex items-center justify-center flex-shrink-0 cursor-pointer">
                <Image
                    src="/logo.webp"
                    alt="Hammad GFX logo"
                    width={96}
                    height={75}
                    className="h-9 w-auto object-contain sm:h-10 lg:h-11"
                    priority
                />
            </a>

            {/* Right Menu (Desktop) */}
            <div className="hidden md:flex flex-1 justify-end gap-1 lg:gap-4">
                {menuItems.slice(3).map((item) => (
                    <a
                        key={item.label}
                        className={`w-[90px] lg:w-[128px] h-[50px] lg:h-[56px] flex items-center justify-center rounded-[60px] text-sm lg:text-base font-medium transition duration-300 ${selected === item.label ? 'bg-[#FD853A] font-bold' : 'bg-transparent hover:bg-[#232323]'}`}
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
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#FD853A] hover:bg-[#e67a2e] transition-colors"
                onClick={toggleMobileMenu}
            >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-[100%] left-0 right-0 mt-2 bg-[#171717] rounded-[25px] border border-white backdrop-blur-[15px] md:hidden z-40">
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
        <div className="h-[58px] w-full shrink-0 sm:h-[64px] md:h-[66px] lg:h-[72px]" aria-hidden="true" />
        </>
    )
}

export default Navbar;
