import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";
import { SiGitbook } from "react-icons/si";
interface ItemProps {
  img: React.ReactNode;
  title: string;
}

const Item: React.FC<ItemProps> = ({ img, title }) => {
  return (
    <div className="border border-default-100 rounded-xl p-3 sm:py-[10px] flex items-center justify-center w-12 h-12 sm:gap-3 group sm:w-auto">
      {typeof img === "string" ? (
        <img
          src={img}
          className="sm:group-hover: text-banner-blue"
          style={{ filter: "hue-rotate(180deg)" }}
        />
      ) : (
        img
      )}
      <div className="text-[16px] sm:group-hover:text-banner-blue text-default-500 hidden sm:block">
        {title}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="space-y-8 bg-black pt-[100px] pb-4 sm:pb-10 sm:px-[92px] sm:pt-[120px]">
      <div className=" flex justify-center sm:justify-between sm:items-center">
        <div className="hidden sm:block">
          <div className="flex gap-3 items-center">
            <img src="/favicon.ico" alt="logo" className=" size-8" />
            <img src="/foo.png" alt="logo" className="w-[56px]" />
          </div>
          <div className="mt-4">
            <div className="text-default-500 text-[14px] text-center">
              Your Foo DeFi hub for maximized yield based on BeraChain.
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Item
            img={
              <FaXTwitter className="group-hover:text-banner-blue w-[20px] h-[18px] text-default-500" />
            }
            title="Twitter"
          />
          <Item
            img={
              <FaDiscord className="group-hover:text-banner-blue w-[20px] h-[18px] text-default-500" />
            }
            title="Discord"
          />
          <Item
            img={
              <BiLogoTelegram className="group-hover:text-banner-blue w-[20px] h-[18px] text-default-500" />
            }
            title="Telegram"
          />
          <Item
            img={
              <FaMedium className="group-hover:text-banner-blue w-[20px] h-[18px] text-default-500" />
            }
            title="Medium"
          />
          <Item
            img={
              <SiGitbook className="group-hover:text-banner-blue w-[20px] h-[18px] text-default-500" />
            }
            title="GitBook"
          />
        </div>
      </div>
      <div className="space-y-6 px-4 sm:space-y-8 sm:w-full sm:px-0">
        <div className="sm:hidden">
          <div className="flex gap-3 justify-center">
            <img
              src="/favicon.ico"
              alt="logo"
              className="object-cover size-8"
            />
            <img src="/foo.png" alt="logo" className="w-[56px]" />
          </div>
          <div className="mt-4">
            <div className="text-default-500 text-[14px] text-center">
              Your Foo DeFi hub
            </div>
            <div className="text-default-500 text-[14px] text-center">
              for maximized yield based on BeraChain.
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-default-100 w-full" />
        <div className="text-default-500 text-[14px] text-center">
          @2024 Foo.io
        </div>
      </div>
    </div>
  );
};

export default Contact;
