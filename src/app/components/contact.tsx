import React from "react";

interface ItemProps {
  img: string;
  title: string;
}

const Item: React.FC<ItemProps> = ({ img, title }) => {
  return (
    <div className="border border-default-100 rounded-xl p-3 sm:py-[10px] flex items-center justify-center w-12 h-12 sm:gap-3 group sm:w-auto">
      <img
        src={img}
        className="sm:group-hover: text-banner-blue"
        style={{ filter: "hue-rotate(180deg)" }}
      />
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
          <div className="flex gap-3">
            <img src="/headerLogo.png" alt="logo" className="object-cover" />
            <img src="/headerFoo.png" alt="logo" className="" />
          </div>
          <div className="mt-4">
            <div className="text-default-500 text-[14px] text-center">
              Your Foo DeFi hub for maximized yield based on BeraChain.
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Item img="/twitter.png" title="Twitter" />
          <Item img="/discord.png" title="Discord" />
          <Item img="/telegram.png" title="Telegram" />
          <Item img="/medium.png" title="Medium" />
          <Item img="/gitbook.png" title="GitBook" />
        </div>
      </div>
      <div className="space-y-6 px-4 sm:space-y-8 sm:w-full sm:px-0">
        <div className="sm:hidden">
          <div className="flex gap-3 justify-center">
            <img src="/headerLogo.png" alt="logo" className="object-cover" />
            <img src="/headerFoo.png" alt="logo" className="" />
          </div>
          <div className="mt-4">
            <div className="text-default-500 text-[14px] text-center">
              Your Foo DeFi hub{" "}
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
