import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import DualToggleButtons from "@/components/ui/DualButtons";
import Image from "next/image";
import { Star } from "lucide-react";
import OrangeButton from "@/components/ui/OrangeButton";
import ArrowButton from "@/components/ui/ArrowButton";
import { experiences, buttons, iconAndText, skills, blogs, portfolioData, cardData, reviews } from '../data/data';
import { GenericSlider } from "@/components/ui/GenericSlider";
import ClientOnly from "@/components/ui/ClientOnly";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-white pt-4 sm:pt-6 pb-0 flex flex-col items-center justify-start">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="group relative flex flex-col w-full max-w-[1440px] min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] px-5 sm:px-6 lg:px-[52px] xl:px-[71px] gap-4 sm:gap-6 items-center justify-center pt-4 sm:pt-6 lg:pt-8 pb-0 sm:pb-4">
        <div className="hidden lg:flex lg:absolute lg:left-[52px] xl:left-[71px] lg:top-[300px] xl:top-[320px] flex-col w-[300px] xl:w-[328px] min-h-[138px] items-start justify-start transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
          <div className="text-[#344054] text-[36px] leading-none">&quot;</div>
          <p className="text-[#344054] text-[16px] font-medium leading-snug">
            I create premium logos, brand identities, social media designs, and marketing visuals that help businesses look trusted, professional, and impossible to ignore.
          </p>
        </div>

        <div className="relative w-full min-w-0 flex flex-col items-center justify-center">
          <div className="flex w-full max-w-[940px] flex-col items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-[1.01] px-0 sm:px-6">
            <span className="h-[42px] px-[24px] py-[10px] rounded-full border border-[#171717] flex items-center justify-center bg-white mt-1 sm:mt-2 text-[#171717] text-sm sm:text-base">
              Hello!
            </span>
            <h1 className="mt-4 sm:mt-5 flex w-full max-w-full flex-col items-center text-center font-semibold leading-[0.95] text-[clamp(38px,10.8vw,64px)] sm:text-[64px] md:text-[74px] xl:text-[88px] text-[#171717]">
              <span>
                I&apos;m <span className="text-[#FD853A]">Hammad</span>,
              </span>
              <span>Professional Visual</span>
              <span>Designer</span>
            </h1>
            <div className="mt-5 w-full flex flex-col gap-3 md:hidden">
              <a href="#projects" className="w-full rounded-full bg-[#FD853A] px-6 py-3.5 text-center text-base font-semibold text-white shadow-md transition-colors hover:bg-[#e4752f]">
                View Portfolio
              </a>
              <a href="#contact" className="w-full rounded-full border border-[#171717] px-6 py-3.5 text-center text-base font-semibold text-[#171717] transition-colors hover:bg-[#171717] hover:text-white">
                Hire Me
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-[760px] lg:max-w-[760px] xl:max-w-[800px] aspect-[1.28/1] sm:aspect-[3/2] flex flex-col items-center justify-center -mt-2 sm:-mt-6 lg:-mt-20 mx-auto px-2 sm:px-4">
            <div className="absolute bottom-0 z-0 w-[78%] max-w-[640px] aspect-[2/1] overflow-hidden flex items-center justify-center pointer-events-auto">
              <div className="absolute w-full h-full bg-[#FEB273] rounded-t-full" />
            </div>

            <div className="absolute bottom-[2%] z-10 hidden w-[78%] max-w-[640px] md:block transition-all duration-500 ease-in-out opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
              <Image
                src="/Frame 68.svg"
                alt="Frame Decoration"
                width={1017}
                height={688}
                className="object-contain w-full h-auto"
                sizes="(max-width: 768px) 78vw, 640px"
                priority
              />
            </div>

            <Image
              src="/my-pic.webp"
              alt="Hammad graphic designer portrait"
              width={952}
              height={636}
              className="relative z-20 w-[68%] max-w-[460px] sm:w-[62%] md:w-[56%] lg:w-[50%] xl:w-[48%] h-auto translate-y-8 object-contain mt-0"
              priority
            />

            <div className="absolute bottom-[9%] z-30 w-full hidden md:flex justify-center px-4">
              <DualToggleButtons />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:absolute lg:right-[52px] xl:right-[71px] lg:top-[350px] xl:top-[370px] w-[190px] h-[125px] flex-col items-end justify-end gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} fill="#FD853A" stroke="#FD853A" />
            ))}
          </div>
          <h1 className="text-[32px] font-bold text-[#171717] leading-none whitespace-nowrap">
            3+ Years
          </h1>
          <p className="text-sm text-[#171717]">Experience</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative flex flex-col w-full min-h-0 gap-8 sm:gap-12 lg:gap-16 items-center px-5 sm:px-6 lg:px-[71px] py-12 sm:py-16 lg:py-[96px] bg-[#171717] rounded-[30px] sm:rounded-[50px] overflow-hidden">
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-50"
        />

        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-6 relative z-10">
          <div className="flex gap-2.5">
            <CustomeText title="My" className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#FCFCFD]" />
            <CustomeText title="Services" className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#FD853A]" />
          </div>
          <p className="w-full lg:w-[578px] font-medium text-base sm:text-lg lg:text-[20px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
            posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        <div className="relative w-full max-w-[1299px] flex items-start justify-center">
          <GenericSlider
            data={cardData}
            slidesPerView={3}
            heightClass="h-auto"
            cardType="hover"
          />
        </div>
      </section>

      {/* Work Experience */}
      <section className="w-full min-h-0 lg:min-h-[760px] flex flex-col items-start mx-auto px-5 sm:px-6 lg:px-[71px] py-10 lg:py-14">
        <div className="w-full h-auto lg:h-[180px] flex flex-wrap lg:flex-row items-start justify-center gap-x-2.5 mb-8 lg:mb-12 text-center lg:text-left">
          <CustomeText title="My" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#344054]" />
          <CustomeText title="Work" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#FD853A]" />
          <CustomeText title="Experience" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#FD853A]" />
        </div>

        <div className="w-full lg:hidden">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0 mt-2">
                  <div className="w-6 h-6 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
                  <div className={`absolute top-1 left-1 w-4 h-4 rounded-full ${exp.dotColor}`} />
                </div>

                <div className="flex-1">
                  <CustomeText title={exp.company} className="font-semibold text-[#1D2939] text-[20px] sm:text-[24px] mb-1" />
                  <CustomeText title={exp.duration} className="text-[#98A2B3] text-[14px] sm:text-[16px] mb-2" />
                  <CustomeText title={exp.role} className="font-semibold text-[#1D2939] text-[18px] sm:text-[20px] mb-2" />
                  {exp.desc && (
                    <CustomeText title={exp.desc} className="text-[#98A2B3] text-[14px] sm:text-[16px] leading-relaxed" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-auto lg:h-[438px] hidden lg:flex justify-evenly">
          <div className="flex flex-col justify-between w-[495px] h-[438px] gap-[102px]">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-[14px]">
                <CustomeText title={exp.company} className="font-semibold text-[#1D2939] text-[40px]" />
                <CustomeText title={exp.duration} className="text-2xl text-[#98A2B3]" />
              </div>
            ))}
          </div>

          <div className="relative flex flex-col items-center justify-between">
            <div className="absolute top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[#1D2939]" />
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-center w-12 h-12">
                <div className="absolute w-12 h-12 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
                <div className={`w-9 h-9 rounded-full z-10 ${exp.dotColor}`} />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between w-[444px] h-[400px] gap-[48px]">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-[14px]">
                <CustomeText title={exp.role} className="font-semibold text-[#1D2939] text-[40px]" />
                {exp.desc && (
                  <CustomeText title={exp.desc} className="text-2xl text-[#98A2B3]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Me */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-between px-5 sm:px-6 lg:px-[71px] py-12 sm:py-16 lg:py-[96px] bg-[#F2F4F7] rounded-[32px] lg:rounded-[50px] gap-8 lg:gap-[76px]">
        <div className="relative w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[500px] aspect-square group mx-auto lg:mx-0">
          <Image
            src="/pic2.webp"
            alt="Hire me"
            fill
            className="object-contain z-10 transition-all duration-300 ease-in-out group-hover:translate-y-3"
            sizes="(max-width: 768px) 90vw, 500px"
            priority
          />

          <Image
            src="/Property 1=Variant2.svg"
            alt="Hire me"
            fill
            className="object-contain absolute -translate-y-[15px] transition-all duration-300 ease-in-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110"
            sizes="(max-width: 768px) 90vw, 500px"
            priority
          />
        </div>

        <div className="w-full max-w-xl flex flex-col items-start gap-6 sm:gap-8">
          <div className="flex flex-wrap text-[36px] sm:text-5xl lg:text-6xl font-semibold gap-2 leading-tight">
            <CustomeText title="Why" className="text-[#344054]" />
            <CustomeText title="Hire me" className="text-[#FD853A]" />
            <CustomeText title="?" className="text-[#344054]" />
          </div>

          <p className="text-[#98A2B3] text-base sm:text-lg lg:text-xl leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <div className="flex flex-col">
              <CustomeText
                title="100+"
                className="text-[32px] sm:text-[36px] font-medium text-[#1D2939]"
              />
              <CustomeText
                title="Designs Completed"
                className="text-lg text-[#667085]"
              />
            </div>
            <div className="flex flex-col">
              <CustomeText
                title="3+"
                className="text-[32px] sm:text-[36px] font-medium text-[#1D2939]"
              />
              <CustomeText
                title="Years Experience"
                className="text-lg text-[#667085]"
              />
            </div>
          </div>

          <ClientOnly>
            <a href="#contact" className="w-full cursor-pointer sm:w-auto px-6 py-3.5 rounded-[20px] border border-[#151515] text-[#151515] font-semibold text-xl sm:text-[24px] transition-all duration-300 hover:bg-[#151515] hover:text-white text-center">
              Hire me
            </a>
          </ClientOnly>
        </div>
      </section>

      {/* Portfolio */}
      <section id="projects" className="w-full flex flex-col items-center px-5 sm:px-6 lg:px-[71px] py-12 sm:py-16 lg:py-20 gap-8 lg:gap-12">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col items-start max-w-full lg:max-w-[643px]">
            <CustomeText
              title="Lets Have a look at"
              className="font-semibold text-[32px] sm:text-[44px] lg:text-[64px] leading-tight text-[#344054]"
            />
            <div className="flex items-start justify-start gap-4 flex-wrap">
              <CustomeText
                title="my"
                className="font-semibold text-[32px] sm:text-[44px] lg:text-[64px] leading-tight text-[#344054]"
              />
              <CustomeText
                title="Portfolio"
                className="font-semibold text-[32px] sm:text-[44px] lg:text-[64px] leading-tight text-[#FD853A]"
              />
            </div>
          </div>

          <div className="shrink-0">
            <OrangeButton title="See All" className="w-[118px] h-[52px] px-6 py-3 text-base sm:w-[144px] sm:h-[60px] sm:text-[18px]" />
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-8 lg:gap-12 max-w-[1290px]">
          <GenericSlider
            data={portfolioData}
            slidesPerView={2}
            heightClass="h-auto"
            cardType="portfolio"
          />

          <div className="w-full max-w-[947px] flex flex-wrap justify-center gap-4 sm:gap-[14px] items-center">
            <ClientOnly>
              {buttons.map((text, index) => (
                <button
                  key={index}
                  className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-[24px] bg-[#F2F4F7] text-[#000000] text-sm sm:text-[18px] lg:text-[20px] hover:bg-[#FD853A] hover:text-white transition-colors duration-300"
                >
                  {text}
                </button>
              ))}
            </ClientOnly>
          </div>

          <div className="flex flex-col w-full max-w-[742px] items-start gap-6 px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row w-full items-start sm:items-center gap-4 sm:gap-[18px]">
              <CustomeText
                title="Lirante - Food Delivery Solution"
                className="font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-[#344054]"
              />
              <div className="w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] rounded-full bg-[#FD853A] hidden md:flex items-center justify-center transition-all duration-300">
                <ArrowButton className="transition-all duration-300 stroke-white -rotate-45" />
              </div>
            </div>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#344054] text-center sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative flex flex-col w-full min-h-0 items-center px-5 sm:px-6 lg:px-[71px] py-12 sm:py-16 lg:py-[90px] gap-8 sm:gap-12 bg-[#171717] rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden">
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-50"
        />

        <div className="flex flex-col w-full max-w-[1299px] items-center gap-4 z-10 px-2">
          <div className="flex flex-col items-center max-w-full sm:max-w-[448px]">
            <CustomeText
              title="Testimonials That"
              className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FCFCFD] text-center"
            />
            <div className="flex flex-wrap gap-2.5 justify-center">
              <CustomeText
                title="Speak to"
                className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FCFCFD]"
              />
              <CustomeText
                title="My Result"
                className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FD853A]"
              />
            </div>
          </div>
          <p className="w-full max-w-[742px] text-[16px] sm:text-[18px] lg:text-[20px] text-[#F9FAFB] text-center leading-[1.6] px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
          </p>
        </div>

        <div className="relative w-full z-10">
          <GenericSlider
            data={reviews}
            slidesPerView={3}
            heightClass=""
            cardType="review"
          />
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="w-full bg-white flex flex-col items-center justify-center py-12 sm:py-16 px-5 sm:px-6 lg:px-[71px] gap-8 sm:gap-10">
        <div className="w-full max-w-4xl text-center flex flex-col items-center gap-3 sm:gap-4">
          <CustomeText
            title="Have an Awesome Project"
            className="font-semibold text-[32px] sm:text-4xl md:text-5xl lg:text-[64px] leading-tight text-[#344054]"
          />
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <CustomeText
              title="Idea?"
              className="font-semibold text-[32px] sm:text-4xl md:text-5xl lg:text-[64px] leading-tight text-[#344054]"
            />
            <CustomeText
              title="Let's Discuss"
              className="font-semibold text-[32px] sm:text-4xl md:text-5xl lg:text-[64px] leading-tight text-[#FD853A]"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 px-3 py-3 md:px-6 md:py-4 rounded-[28px] sm:rounded-full border border-[#E4E7EC] bg-white">
          <div className="w-9 h-9 md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full bg-[#FFEAD5] shrink-0">
            <Image
              src="/sms.svg"
              alt="message icon"
              width={24}
              height={24}
            />
          </div>

          <ClientOnly>
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full md:flex-1 px-4 py-2 rounded-full text-center md:text-left text-base sm:text-lg outline-none bg-transparent text-[#1D2939] placeholder:text-[#667085]"
            />

            <button className="w-full sm:w-fit px-6 md:px-12 py-2.5 md:py-3 rounded-full bg-[#FD853A] hover:bg-[#e4752f] text-white text-base sm:text-lg font-semibold transition duration-300">
              Send
            </button>
          </ClientOnly>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base font-medium text-[#000000]">
          {iconAndText.map((data, index) => {
            const Icon = data.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon size={20} />
                {data.name}
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills Slider */}
      <div className="relative w-full h-[100px] sm:h-[147px] bg-[#FB6514] rounded-tl-4xl rounded-br-4xl overflow-hidden">
        <div className="absolute top-6 sm:top-8 left-0 w-full h-[52px] sm:h-[63px] bg-white -rotate-2 md:-rotate-[1.9deg] z-10 flex items-center overflow-hidden">
          <div className="hidden sm:flex marquee gap-8 w-max">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-5 text-[#000000] text-[48px] whitespace-nowrap"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4828 0.257982L21.715 12.3411L34.2082 16.5003L22.1251 21.7324L17.9659 34.2256L12.7337 22.1425L0.240553 17.9833L12.3237 12.7512L16.4828 0.257982Z"
                    fill="#FD853A"
                  />
                </svg>
                {skill}
              </div>
            ))}
          </div>
          <div className="flex sm:hidden w-full justify-center gap-4 overflow-hidden px-6">
            {skills.slice(0, 2).map((skill, index) => (
              <div
                key={index}
                className="flex shrink-0 items-center gap-2 text-[#000000] text-[22px] whitespace-nowrap"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4828 0.257982L21.715 12.3411L34.2082 16.5003L22.1251 21.7324L17.9659 34.2256L12.7337 22.1425L0.240553 17.9833L12.3237 12.7512L16.4828 0.257982Z"
                    fill="#FD853A"
                  />
                </svg>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog */}
      <section className="flex flex-col w-full h-fit items-center gap-8 sm:gap-12 px-5 sm:px-6 lg:px-[71px] py-12 sm:py-16 lg:py-[90px] overflow-hidden">
        <div className="w-full max-w-[1298px] h-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-0">
          <h1 className="text-[#344054] w-full lg:w-fit md:min-w-[215px] h-auto font-bold text-[32px] sm:text-4xl md:text-5xl leading-tight">From my blog post</h1>
          <OrangeButton title="See All" className="w-[118px] h-[52px] px-6 py-3 text-base sm:w-[144px] sm:h-[60px] sm:text-[18px]" />
        </div>
        <GenericSlider
          data={blogs}
          slidesPerView={3}
          heightClass=""
          cardType="blog"
        />
      </section>

    </div>
  );
}
