import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "../utils";

interface OptionProp {
  title: string;
  desc: string;
}

const Item: React.FC<OptionProp> = ({ title, desc }) => {
  return (
    <div className="border rounded-xl p-5 border-default-100 space-y-3 bg-opacity-30 sm:p-6 bg-default-50 group-hover:bg-opacity-100 w-[229px]">
      <div className="text-[32px] font-bold text-neutral-white">{title}</div>
      <div className="text-[16px] text-default-400">{desc}</div>
    </div>
  );
};

const options: OptionProp[] = [
  { title: "2024 Q3", desc: "build on bera, and launch testnet" },
  { title: "2024 Q4", desc: "NFT Free mint, token IDO, Launch mainnet" },
  { title: "2025 Q1", desc: "muiltichain support and build aggregation layer" },
];

export default function RoadMap() {
  return (
    <div className="bg-black sm:px-[60px] sm:py-20 px-4 relative h-[453px] sm:h-[720px] ">
      <div className="text-neutral-white text-[40px] font-black ">RoadMap</div>
      <img
        src="/points-map.png"
        className="object-cover h-[393px] w-[calc(100%-32px)] sm:h-[500px] sm:w-[calc(100%-120px)] absolute"
      />
      <Carousel className="w-full " opts={{ dragFree: true }}>
        <CarouselContent className="gap-[10px] h-[393px] items-center relative sm:h-[500px] px-[6.4%]">
          {options.map(({ title, desc }, index) => (
            <CarouselItem
              className={cn(
                "sm:basis-1/3 sm:mt-[25px]",
                index === 0 && "group"
              )}
              key={title}
            >
              <div
                className={cn(
                  "flex flex-col items-center gap-3",
                  index !== 0 && "gap-[78.6px]"
                )}
              >
                <div>
                  <img
                    src="/highlight-foot.png"
                    className="hidden w-[103px] group-hover:block sm:w-[184px]"
                  />
                  <img
                    src="/foot.png"
                    className=" w-[126px] group-hover:hidden  sm:w-[225px] "
                  />
                </div>
                {index === 0 && (
                  <img src="/cover-points.svg" className="h-[54.6px]" />
                )}
                <Item title={title} desc={desc} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
