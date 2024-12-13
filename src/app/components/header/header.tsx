"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import React from "react";
import HeaderSelect from "./header-select";
import { WiDaySunny } from "react-icons/wi";
import { useAccount } from "wagmi";

const Header = () => {
  const account = useAccount();
  console.log(account);

  return (
    <div className="p-4 justify-between bg-black flex">
      <div className="flex gap-3 items-center">
        <img src="/favicon.ico" alt="logo" className="object-cover size-8" />
        <img src="/foo.png" alt="logo" className="object-cover w-[56px]" />
        <div className="ml-12  gap-9 hidden sm:flex">
          <button className="text-[16px] font-medium text-foreground-100">
            Trade
          </button>
          <button className="text-[16px] font-medium text-foreground-100">
            Copy Trading
          </button>
          <button className="text-[16px] font-medium text-foreground-100">
            Funds
          </button>
          <HeaderSelect
            title="Yield"
            options={[
              {
                title: "Yeild",
                desc: "By Stake AZT and buy ALP, you can earn protocol income and rewards.",
                imageSrc: "/brain.png",
              },
              {
                desc: "One-stop liquidity provision for Berachain, earning dual rewards. ",
                title: "Bera Station",
                imageSrc: "/stack.png",
              },
            ]}
          />
          <button className="text-[16px] font-medium text-foreground-100">
            Nfts
          </button>
          <button className="text-[16px] font-medium text-foreground-100">
            Launchpad
          </button>
          <HeaderSelect
            title="More"
            options={[
              {
                title: "Referrals",
                desc: "Invite friends to trade and enjoy fee discounts while you earn rebates.",
                imageSrc: "/percentage.png",
              },
              {
                desc: "The comprehensive statistics and data visualization. ",
                title: "Analytics",
                imageSrc: "/line-chart.png",
              },
              {
                desc: "The ranked list based on trading performance.",
                title: "Leaderboard",
                imageSrc: "/golden.png",
              },
            ]}
          />
        </div>
      </div>
      <div className="flex gap-3 items-center sm:gap-4">
        {account.address && (
          <div className="flex gap-1">
            <button>
              <img src="/faucet.png" className="size-6 hidden sm:block" />
            </button>
            <div className="hidden sm:block text-default-700">08:00:00</div>
          </div>
        )}
        <WiDaySunny className="hidden sm:block text-default-700 size-6" />
        <ConnectButton />
        <Image
          src="/headerMeun.png"
          alt="logo"
          width={32}
          height={32}
          className="sm:hidden"
        />
      </div>
    </div>
  );
};

export default Header;
