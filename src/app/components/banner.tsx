"use client";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

interface ItemProps {
  title: string;
  desc: string;
}

const Item: React.FC<ItemProps> = ({ title, desc }) => {
  return (
    <div className="space-y-1 px-4 z-50 mt-3 sm:space-y-8 sm:px-6 sm:py-4 sm:mt-0 sm:w-[23%]">
      <div className="text-default-400 body-lg sm:text-[14px]">{title}</div>
      <div className="body-3xl text-neutral-white sm:text-[32px] sm:font-semibold">
        {desc}
      </div>
    </div>
  );
};

const Banner = () => {
  const wordList = ["Token", "One", "Time", "Where"];
  return (
    <div className="relative h-[644px] bg-black sm:h-[718px]">
      <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        className="h-[644px] object-cover absolute sm:h-[718px] sm:w-full"
      />
      <div className=" z-50 absolute w-full pt-[60px] space-y-6">
        <div className="title-2 text-neutral-white text-center w-[291px] m-auto sm:text-[68px] sm:w-[729px] sm:leading-[70px]">
          Decentralized Perpetual Exchange For Any
          <Carousel
            orientation="vertical"
            className="inline-flex sm:h-[75px] pt-[8px] h-[37px]"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="sm:h-[75px] -mt-0 h-[37px]">
              {wordList.map((word) => (
                <span className="text-banner-blue text-left sm:ml-[17px] ml-[10px]">
                  {word}
                </span>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="text-default-600 w-[261px] m-auto text-center body-xl sm:text-[24px] sm:leading-[32.16px] sm:w-[487px]">
          Leverage any assets, permissionless listing
          <span className="text-banner-blue"> all</span> tokens.
        </div>
        <button className="hidden sm:block bg-banner-blue rounded-full px-[42px] h-[52px] text-neutral-white text-[16px] font-bold m-auto">
          Launch App
        </button>
        <div className="px-4 space-y-6 pt-3 sm:flex sm:space-y-0 sm:gap-8 sm:pt-20 sm:px-[60px]">
          <Item title="Total Value Locked" desc={"$60,000.00"} />
          <Item title="Total Trading Volume" desc={"$60,000.00"} />
          <Item title="Open Interest" desc={"$60,000.00"} />
          <Item title="Total Users" desc={"19330"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
