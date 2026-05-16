import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FacebookIcon, InstagramIcon, MessageCircle, TwitterIcon, YoutubeIcon } from "lucide-react";
import CustomeText from "./ui/CustomeText";
import ClientOnly from "./ui/ClientOnly";
import Reveal from "./ui/Reveal";

const Footer = () => {
    const navigation = [
        { label: "Home", href: "/#home" },
        { label: "About", href: "/#about" },
        { label: "Service", href: "/#services" },
        { label: "Resume", href: "/HammadGfx-CV.pdf", download: true },
        { label: "Project", href: "/portfolio" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/#contact" },
    ];

    const iconsAndUrl = [
        { icon: FacebookIcon, url: "https://facebook.com" },
        { icon: YoutubeIcon, url: "https://youtube.com/@clyrotechsolutions" },
        { icon: MessageCircle, url: "https://wa.me/923280830815" },
        { icon: InstagramIcon, url: "https://instagram.com/clyrotechpk" },
        { icon: TwitterIcon, url: "https://x.com/clyrotech" },
    ];

    const contact = [
        "WhatsApp: +92 3280830815",
        "Email: clyrotechpk@gmail.com",
        "Portfolio: hammadgfx.online",
    ];

    return (
        <footer className="w-full bg-[#272727] px-5 py-8 text-white sm:px-6 sm:py-10 lg:px-[71px] lg:py-12 rounded-t-2xl sm:rounded-t-3xl">
            <Reveal>
            <div className="mx-auto flex w-full max-w-[1298px] flex-col gap-8 lg:gap-10">
                <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                    <h1 className="max-w-3xl text-[34px] font-semibold leading-tight text-[#FCFCFD] sm:text-[46px] lg:text-[64px]">
                        Let&apos;s Build a Premium Visual Identity
                    </h1>
                    <ClientOnly>
                        <a href="/#contact" className="group flex h-[54px] w-full items-center justify-center gap-2 rounded-full bg-[#FD853A] px-5 text-base font-semibold text-white transition-colors hover:bg-[#e46e24] sm:w-[180px] lg:h-[62px] lg:w-[202px] lg:text-lg">
                            Hire Me
                            <ArrowUpRight size={24} className="transition-transform duration-300 group-hover:rotate-45" />
                        </a>
                    </ClientOnly>
                </div>

                <div className="border border-[#475467]" />

                <div className="grid gap-8 lg:grid-cols-[1.5fr_0.65fr_0.85fr_0.9fr]">
                    <div className="flex flex-col gap-5">
                        <Link href="/#home" className="flex w-fit items-center gap-3">
                            <Image src="/logo.webp" alt="Hammad GFX logo" width={96} height={75} className="h-auto w-14 object-contain" style={{ height: "auto" }} />
                            <span className="text-lg font-bold tracking-wide">Hammad GFX</span>
                        </Link>
                        <p className="max-w-xl text-base leading-relaxed text-[#FCFCFD] sm:text-lg">
                            Premium graphic design, brand identity, social media design, and marketing visuals for businesses that want to look trusted and impossible to ignore.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {iconsAndUrl.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={idx}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#333333] transition-transform hover:scale-110 hover:bg-[#444444]"
                                    >
                                        <Icon size={18} className="text-[#FD853A]" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <CustomeText title="Navigation" className="text-[20px] font-semibold text-[#FD853A]" />
                        <div className="flex flex-col gap-3">
                            {navigation.map((item) => (
                                <a
                                    href={item.href}
                                    download={item.download}
                                    key={item.label}
                                    className="text-[15px] text-[#FCFCFD] transition-colors hover:text-[#FD853A] sm:text-base"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <CustomeText title="Contact" className="text-[20px] font-semibold text-[#FD853A]" />
                        <div className="flex flex-col gap-3">
                            {contact.map((item) => (
                                <span key={item} className="break-words text-[15px] text-[#FCFCFD] sm:text-base">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-5">
                        <CustomeText title="Get the latest design insights" className="text-[20px] font-semibold text-[#FD853A]" />
                        <div className="relative h-[50px] w-full">
                            <ClientOnly>
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    className="h-full w-full rounded-[10px] border-none bg-white px-4 py-3 pr-14 text-[15px] text-black outline-none"
                                />
                                <button className="absolute right-0 top-0 flex h-full w-[50px] items-center justify-center rounded-r-[10px] bg-[#FD853A] transition-colors hover:bg-[#e46e24]">
                                    <svg width="22" height="22" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.29602 3.48708C3.91012 2.38589 1.36183 4.66673 2.19279 7.15964L3.45424 10.9007C3.59136 11.3074 3.97267 11.5812 4.40182 11.5812H13C13.5523 11.5812 14 12.0289 14 12.5812C14 13.1335 13.5523 13.5812 13 13.5812H4.40182C3.97267 13.5812 3.59136 13.855 3.45424 14.2617L2.19281 18.0028C1.36183 20.4957 3.91012 22.7765 6.29603 21.6754L20.0983 15.3051C22.422 14.2326 22.422 10.9299 20.0983 9.85737L6.29602 3.48708Z" fill="#FCFCFD" />
                                    </svg>
                                </button>
                            </ClientOnly>
                        </div>
                    </div>
                </div>

                <div className="border border-[#475467]" />

                <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
                    <p className="text-base text-white sm:text-lg">© 2026 Hammad GFX. All Rights Reserved.</p>
                    <Link href="/#home" className="text-base text-white transition-colors hover:text-[#FD853A] sm:text-lg">Back to top</Link>
                </div>
            </div>
            </Reveal>
        </footer>
    );
};

export default Footer;
