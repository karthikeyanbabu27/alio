import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newst";
import Banner from "./components/Banner";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Banner></Banner>
     <Hero></Hero>
     <Newest></Newest>
    </div>
    
  );
}
