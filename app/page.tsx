import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newst";
import Banner from "./components/Banner";
import Categories from "./components/Category";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Banner></Banner>
      <Categories></Categories>
      
      <Newest></Newest>
    </div>
    
  );
}
