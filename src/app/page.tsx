import FirstSection from "@/components/home/FirstSection";
import SecondSection from "@/components/home/SecondSection";
import ThirdSection from "@/components/home/ThirdSection";
import HeaderSlider from "@/components/layout/HeaderSlide";


export default function Home() {
  return (
    
    <>
    {/* HeaderSlider */}
        <HeaderSlider
          heightClass="h-[60vh] md:h-[80vh]"
          slides={[
            {
              src: "/img/home/fpHeader.webp",
              alt: "Bags manufacturing",
              title1: "FastPro",
              title2: "0% tariffs",
              paragraph: "Our products are exempt under the United States/Mexico/Canada Agreement (USMCA) and Tratado Mexico Estados Unidos Canada (T-MEC).",
            },
            {
              src: "/img/home/fpHeader2.webp",
              title1: "FastPro",
              title2: "5 week lead times",
              paragraph: "Custom fit, with fast design, sampling & delivery",
            },
            {
              src: "/img/home/fpHeader3.webp",
              title1: "FastPro",
              title2: "Minutes from the US border",
              paragraph: "Shipping from our México Plant to the USA reduces your delivery risks and provides a cost-effective solution compared to containers from overseas.",
            },
          ]} /> 

        
    {/* First Section */}
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    </>
  );
}
