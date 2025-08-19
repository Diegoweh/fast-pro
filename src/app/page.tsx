import FirstSection from "@/components/home/FirstSection";
import SecondSection from "@/components/home/SecondSection";
import ThirdSection from "@/components/home/ThirdSection";
import HeaderSlider from "@/components/layout/HeaderSlide";
import Image from "next/image";

export default function Home() {
  return (
    
    <>   
      {/* First Section */}
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      </>
  );
}
