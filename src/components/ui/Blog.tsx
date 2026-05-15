import Image from 'next/image';
import React from 'react';
import ArrowButton from './ArrowButton';
import { Blog as BlogType } from '../../data/data'; 
import ClientOnly from './ClientOnly';

interface BlogProps extends BlogType {
  priority?: boolean;
}

const Blog: React.FC<BlogProps> = ({ image, button, name, date, title, priority = false }) => {
  return (
    <div className="flex flex-col w-full max-w-[416px] h-auto items-start gap-5 sm:gap-[28px]">
      <div className="relative w-full h-[220px] sm:h-[330px] lg:h-[432px] gap-[10px] items-start group overflow-hidden rounded-[18px] bg-[#F2F4F7]">
        <Image
          src={image}
          alt="image"
          width={416}
          height={432}
          className="w-full h-full object-cover cursor-pointer rounded-[18px]"
          priority={priority}
        />
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-14 h-14 sm:w-20 sm:h-20 lg:w-[96px] lg:h-[96px] rounded-full bg-[#1D2939] group-hover:bg-[#FD853A] flex items-center justify-center transition-all duration-300">
          <ArrowButton
            className="transition-all duration-300 stroke-white -rotate-45"
            height={56}
            width={56}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 sm:gap-[28px] items-start w-full">
        <ClientOnly>
          <button className="w-auto min-w-[150px] h-[46px] sm:h-[54px] rounded-3xl flex items-center justify-center px-6 sm:px-[32px] py-3 sm:py-[15px] bg-[#F2F4F7] text-[#000000] text-base sm:text-[20px]">
            {button}
          </button>
        </ClientOnly>

        <div className="flex flex-wrap items-start gap-3 sm:gap-[24px]">
          <div className="flex items-center gap-2.5">
            <span className="bg-[#FD853A] w-[9px] h-[9px] rounded-full"></span>
            <span className="text-[#344054] text-sm sm:text-[18px] lg:text-[20px]">{name}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="bg-[#FD853A] w-[9px] h-[9px] rounded-full"></span>
            <span className="text-[#344054] text-sm sm:text-[18px] lg:text-[20px]">{date}</span>
          </div>
        </div>

        <h3 className="w-full h-auto text-[24px] sm:text-[28px] lg:text-[32px] leading-tight text-[#344054]">
          {title ?? 'Design Unraveled: Behind the Scenes of UI/UX Magic'}
        </h3>
      </div>
    </div>
  );
};

export default Blog;
