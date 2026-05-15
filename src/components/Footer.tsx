import React from "react";
import { FacebookIcon, YoutubeIcon, InstagramIcon, TwitterIcon, MessageCircle } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import CustomeText from "./ui/CustomeText";
import Link from "next/link";
import ClientOnly from "./ui/ClientOnly";

const Footer = () => {
    const navigation = ["Home", "About", "Service", "Resume", "Project", "Contact"];
    const iconsAndUrl = [
        { icon: FacebookIcon, url: "https://facebook.com" },
        { icon: YoutubeIcon, url: "https://youtube.com" },
        { icon: MessageCircle, url: "https://whatsapp.com" },
        { icon: InstagramIcon, url: "https://instagram.com" },
        { icon: TwitterIcon, url: "https://twitter.com" },
    ];

    const contact = [
        "+91 9874563210",
        "hello@gmail.com",
        "hello.com"
    ]

    return (
        <footer className="w-full min-h-[400px] lg:h-[685px] px-4 sm:px-6 lg:px-[71px] py-[30px] sm:py-[35px] lg:py-[40px] flex flex-col bg-[#272727] rounded-t-2xl sm:rounded-t-3xl text-white justify-between">

            {/* Top Section */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
                <h1 className="font-semibold leading-tight text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[64px] text-[#FCFCFD] text-center lg:text-left">
                    Let&apos;s Connect There
                </h1>
                <ClientOnly>
                    <button className="group flex items-center justify-center gap-2 w-full sm:w-[180px] lg:w-[202px] h-[50px] sm:h-[56px] lg:h-[62px] px-4 sm:px-5 py-2 sm:py-2.5 text-white text-base sm:text-lg font-semibold rounded-full bg-[#FD853A] cursor-pointer hover:bg-[#e46e24] transition-colors">
                        Hire Me
                        <ArrowUpRight
                            size={24}
                            className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-transform duration-300 group-hover:rotate-45"
                        />
                    </button>
                </ClientOnly>
            </div>

            <div className="border border-[#475467] w-full mt-6 md:mt-0"></div>

            {/* Navigation Links */}
            <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1298px] h-auto lg:h-[239px] gap-8 lg:gap-0 mt-8 md:mt-0">

                <div className="w-full lg:w-[635px] h-full flex flex-col items-start justify-start gap-6 lg:gap-10">
                    <div className="flex gap-3 sm:gap-4 items-center flex-shrink-0 cursor-pointer">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-[#FD853A] rounded-full flex items-center justify-center mb-1">
                            <svg width="20" height="20" className="sm:w-6 sm:h-6 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="4" y="18" fontSize="12" className="sm:text-sm lg:text-base" fontWeight="bold" fill="white">JC</text>
                            </svg>
                        </div>
                        <span className="font-bold text-base sm:text-lg tracking-wide cursor-pointer">JCREA</span>
                    </div>
                    <p className="w-full h-auto lg:h-[61px] text-[16px] sm:text-[18px] lg:text-[20px] text-[#FCFCFD]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    <div className="flex gap-2 sm:gap-2.5">
                        {iconsAndUrl.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={idx}
                                    href={`https://${item.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10  rounded-full flex hover:scale-110 transition-transform bg-[#333333] hover:bg-[#444444] items-center justify-center"
                                >
                                    <Icon size={16} className="sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-[#FD853A]" />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-7">
                    <CustomeText title="Navigation" className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#FD853A]" />
                    <div className="flex flex-col gap-3 lg:gap-5">
                        {navigation.map((key, idx) => (
                            <Link href={`#${key.toLowerCase()}`} key={idx} className="text-[#FCFCFD] text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer hover:text-[#FD853A] transition-colors">
                                {key}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-7">
                    <CustomeText title="Contact" className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#FD853A]" />
                    <div className="flex flex-col gap-3 lg:gap-5">
                        {contact.map((key, idx) => (
                            <span key={idx} className="text-[#FCFCFD] text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer hover:text-[#FD853A] transition-colors">
                                {key}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-7 w-full lg:w-[304px] items-start">
                    <CustomeText
                        title="Get the latest information"
                        className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#FD853A]"
                    />
                    <div className="relative w-full h-[45px] sm:h-[48px] lg:h-[51px]">
                        <ClientOnly>
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="w-full h-full bg-white text-black text-[14px] sm:text-[15px] lg:text-[16px] px-3 sm:px-4 py-2 sm:py-3 pr-12 rounded-[8px] sm:rounded-[10px] border-none outline-none"
                            />
                            <button className="absolute top-0 right-0 h-full w-[45px] sm:w-[48px] lg:w-[51px] bg-[#FD853A] rounded-r-[8px] sm:rounded-r-[10px] flex items-center justify-center cursor-pointer hover:bg-[#e46e24] transition-colors">
                                <svg width="20" height="21" className="sm:w-6 sm:h-6 lg:w-6 lg:h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.29602 3.48708C3.91012 2.38589 1.36183 4.66673 2.19279 7.15964L3.45424 10.9007C3.59136 11.3074 3.97267 11.5812 4.40182 11.5812H13C13.5523 11.5812 14 12.0289 14 12.5812C14 13.1335 13.5523 13.5812 13 13.5812H4.40182C3.97267 13.5812 3.59136 13.855 3.45424 14.2617L2.19281 18.0028C1.36183 20.4957 3.91012 22.7765 6.29603 21.6754L20.0983 15.3051C22.422 14.2326 22.422 10.9299 20.0983 9.85737L6.29602 3.48708Z" fill="#FCFCFD" />
                                </svg>
                            </button>
                        </ClientOnly>
                    </div>
                </div>
            </div>

            <div className="border border-[#475467] w-full mt-8 lg:mt-16"></div>

            <div className="flex flex-col sm:flex-row w-full max-w-[1298px] h-auto lg:h-[26px] items-start justify-between gap-4 sm:gap-0 mt-6 md:mt-0">
                <p className="w-full sm:w-[415px] h-auto lg:h-[26px] text-[16px] sm:text-[18px] lg:text-[20px] text-white text-center sm:text-left">Copyright© 2023 Jayesh. All Rights Reserved.</p>
                <Link href={"#"} className="w-full sm:w-fit h-auto lg:h-[26px] text-[16px] sm:text-[18px] lg:text-[20px] text-white text-center sm:text-right hover:text-[#FD853A] transition-colors">Privacy Policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
