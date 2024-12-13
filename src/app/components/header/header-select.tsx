"use client";
import { cn } from "@/app/utils";
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

interface Option {
  title: string;
  desc: string;
  imageSrc: string;
}

interface HeaderSelectProps {
  title: string;
  options: Option[];
}

const HeaderSelect: React.FC<HeaderSelectProps> = ({ options, title }) => {
  const [showList, setShowList] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click was outside the dropdown
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowList(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={dropdownRef}>
      <button
        onClick={() => {
          setShowList(!showList);
        }}
        className="text-[16px] font-medium text-foreground-100 flex gap-1 items-center"
      >
        {title}
        <IoIosArrowDown
          className={cn("text-foreground-100 size-4", showList && "hidden")}
        />
        <IoIosArrowUp
          className={cn("text-foreground-100 size-4", !showList && "hidden")}
        />
      </button>
      {showList && (
        <div className="bg-default-50 border-[0.5px] border-default-100 rounded-[14px] p-3 w-[320px] absolute z-[60] ml-[-140px] mt-[25px] ease-in 0.2s">
          {options.map((item) => (
            <div className="hover:bg-default-100 flex items-center py-[14px] px-4 gap-4 rounded-lg group">
              <img src={item.imageSrc} className=" h-6" />
              <div className="">
                <div className="text-foreground-500 text-sm group-hover:text-foreground-100">
                  {item.title}
                </div>
                <div className="text-foreground-500 text-xs">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderSelect;
