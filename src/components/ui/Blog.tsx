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
    <div className="flex flex-col w-[416px] h-[699px] items-start gap-[35px]">
      <div className="relative w-full h-[432px] gap-[10px] items-start group">
        <Image
          src={image}
          alt="image"
          width={416}
          height={432}
          className="w-full h-full object-cover cursor-pointer"
          priority={priority}
        />
        <div className="absolute top-[330px] left-[300px] w-[114px] h-[114px] rounded-full bg-[#1D2939] group-hover:bg-[#FD853A] flex items-center justify-center transition-all duration-300">
          <ArrowButton
            className="transition-all duration-300 stroke-white -rotate-45"
            height={114}
            width={114}
          />
        </div>
      </div>

      <div className="flex flex-col gap-[35px] items-start">
        <ClientOnly>
          <button className="w-[196px] h-[54px] rounded-3xl flex items-center justify-center px-[32px] py-[15px] bg-[#F2F4F7] text-[#000000] text-[20px]">
            {button}
          </button>
        </ClientOnly>

        <div className="flex items-start gap-[35px]">
          <div className="flex items-center gap-2.5">
            <span className="bg-[#FD853A] w-[9px] h-[9px] rounded-full"></span>
            <span className="text-[#344054] text-[20px]">{name}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="bg-[#FD853A] w-[9px] h-[9px] rounded-full"></span>
            <span className="text-[#344054] text-[20px]">{date}</span>
          </div>
        </div>

        <h3 className="w-[416px] h-[84px] text-[32px] text-[#344054]">
          {title ?? 'Design Unraveled: Behind the Scenes of UI/UX Magic'}
        </h3>
      </div>
    </div>
  );
};

export default Blog;
