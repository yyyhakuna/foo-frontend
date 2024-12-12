import Image from "next/image";
import { HomeProvider } from "./components/provider/home-provider";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Header from "./components/header/header";
import Banner from "./components/banner";
import Main from "./components/main";
import RoadMap from "./components/roadmap";
import Contact from "./components/contact";
export default function Home() {
  return (
    <HomeProvider>
      <Header />
      <Banner />
      <Main />
      <RoadMap />
      <Contact />
    </HomeProvider>
  );
}
