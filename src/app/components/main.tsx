import Image from "next/image";
import React from "react";

interface CardItemProps {
  imageSrc: string;
  title: string;
  desc: string;
}

interface ItemProps {
  imageSrc: string;
  title: React.ReactNode;
  topDesc: string;
  bottomDesc: string;
  dir?: string;
}

const CardItem: React.FC<CardItemProps> = ({ imageSrc, title, desc }) => {
  return (
    <div className="space-y-4 border-border-color border rounded-xl px-6 py-8 sm:bg-default-50 sm:bg-opacity-40 group sm:w-full sm:h-[510px] sm:flex sm:flex-col sm:p-10">
      <div className="sm:flex-1 flex items-center justify-center ">
        <img
          src={imageSrc}
          alt="image"
          className="object-cover m-auto max-h-[220px]"
        />
      </div>
      <div className="text-neutral-white text-2xl text-center leading-[25.56px] w-[181px] m-auto sm:text-[24px] sm:flex sm:justify-between sm:w-full sm:items-center sm:text-left">
        {title}
        <img src="/card-meun.png" className="hidden sm:block" />
      </div>
      <div className="text-default-300 body-2xl text-center leading-[18px] m-auto sm:hidden sm:group-hover:block sm:text-left">
        {desc}
      </div>
    </div>
  );
};

const Item: React.FC<ItemProps> = ({
  imageSrc,
  title,
  topDesc,
  bottomDesc,
  dir = "left",
}) => {
  return (
    <div className="py-10">
      <div className="flex items-center gap-4 sm:gap-[60px] sm:px-[100px]">
        {dir === "left" && (
          <img
            src={imageSrc}
            alt="image"
            className="object-cover m-auto shrink-0 max-w-[140px] sm:max-w-[530px]"
          />
        )}
        <div className="space-y-6">
          <div className="text-2xl leading-[27.6px] sm:text-[64px] sm:leading-[73.59px]">
            {title}
          </div>
          <ul className="list-disc space-y-4 sm:space-y-6">
            <li className="text-default-600 ml-4 text-xs leading-[13.8px] sm:text-base sm:leading-[21.44px]">
              {topDesc}
            </li>
            <li className="text-default-600 ml-4 text-xs leading-[13.8px] sm:text-base sm:leading-[21.44px]">
              {bottomDesc}
            </li>
          </ul>
        </div>
        {dir === "right" && (
          <img
            src={imageSrc}
            alt="image"
            className="object-cover m-auto shrink-0 max-w-[140px] sm:max-w-[530px]"
          />
        )}
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="pt-20 pb-20 px-4 bg-black sm:px-[60px] relative overflow-hidden sm:pt-[100px]">
      <img src="/main-left-bg.png" className="absolute -mt-[150px] h-[800px]" />
      <div className="space-y-4 sm:space-y-8">
        <div className="title-1 text-center text-neutral-white sm:text-[128px] sm:h-[100px]">
          FOO
        </div>
        <div className="">
          <div className="body-2xl text-center text-default-600 w-[279px] m-auto sm:font-[20px] sm:w-full">
            Your Foo DeFi hub, masterfully harnessing berachain ’s core to
            amplify yield strategies.
          </div>
          <div className="body-2xl text-center text-default-600 w-[279px] m-auto sm:font-[20px] sm:w-full tracking-[2%">
            Join our Dex featuring Perp, Yield,CopyTrading, and more.
          </div>
        </div>
      </div>
      <div className="space-y-8 ">
        <div className="mt-20 space-y-4 sm:px-8 sm:flex sm:space-y-0 sm:mt-[60px] sm:gap-8">
          <CardItem
            desc="Permissionless listing allows any project or asset to be listed on the platform without requiring prior approval or authorization. This feature promotes a decentralized and open environment, where anyone can introduce new assets, enabling greater innovation and inclusivity within the marketplace."
            title="PermissionLess Listing"
            imageSrc="/crypto.png"
          />
          <CardItem
            desc="Copytrading enables users to mirror the trades of more experienced or successful traders. By simply following a trader’s strategy, novice or less active users can participate in the market with minimal effort, potentially benefiting from the expertise of top traders."
            title="Copytrading"
            imageSrc="/trading.png"
          />
          <CardItem
            desc="The fund manager model allows professional managers to oversee and manage pools of capital for other investors. Users can choose to invest in a fund managed by an expert, with the manager handling all aspects of trading and investment decisions."
            title="Fund Manager Model"
            imageSrc="/manage.png"
          />
          <img
            src="/main-right-bg.png"
            className="absolute right-[-260px] top-[260px] h-[500px]"
          />
        </div>
        <div className="space-y-4">
          <img
            src="/main-pig-bg.png"
            className="absolute h-[500px] left-[160px] mt-[100px]"
          />
          <Item
            title={
              <div className="text-neutral-white">
                Up to <span className="text-banner-blue"> 100%</span> Fee Refund
              </div>
            }
            imageSrc="/pig.png"
            topDesc="This feature offers users the possibility of getting a refund on their transaction fees, up to 100%, depending on their activity or loyalty. "
            bottomDesc="It rewards frequent traders or large-volume users, incentivizing engagement with the platform and reducing overall trading costs."
          />
          <Item
            title={
              <div className="text-neutral-white">
                Yield <span className="text-banner-blue"> Upgrade</span>
              </div>
            }
            imageSrc="/chart.png"
            dir="right"
            topDesc="Yield upgrade offers users the ability to enhance their investment returns through optimized strategies, increased exposure, or access to higher-yielding opportunities. "
            bottomDesc="This feature maximizes potential returns on staked assets or investments, offering greater profitability with more advanced DeFi products."
          />
          <Item
            title={<div className="text-neutral-white">Token-Incentivized</div>}
            imageSrc="/square.png"
            topDesc="Token-incentivized models use native tokens to reward users for their participation or contributions to the platform."
            bottomDesc="Whether it's for liquidity providing, staking, trading, or participating in governance, users can earn tokens as an incentive, enhancing their engagement while benefiting from the ecosystem’s growth."
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
