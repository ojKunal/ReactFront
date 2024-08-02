import { FunctionComponent } from "react";
import Section1 from "../components/mainpage_components/Section1";
import Section2 from "../components/mainpage_components/Section2";
import Deals from "../components/mainpage_components/Deals";
import Staycation from "../components/mainpage_components/Staycation";
import SectionBlog from "../components/mainpage_components/SectionBlog";
import Section_OtherPlatform from "../components/mainpage_components/Section_OtherPlatform";
import Newsletter from "../components/mainpage_components/Newsletter";
import Footer from "../components/mainpage_components/Footer";
import { useNavigate } from "react-router-dom";

const MainPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleMainClick = (city_name: string) => {
    const checkin = "2024-08-01"; // Example value, replace with actual data
    const checkout = "2024-08-05"; // Example value, replace with actual data
    const members = "exampleMembers"; // Example value, replace with actual data
    const param1 = "exampleParam1"; // Example value, replace with actual data
    const param2 = "exampleParam2"; // Example value, replace with actual data
    const param3 = "exampleParam3"; // Example value, replace with actual data

    const url = `/search/${city_name}?type=hotel&checkin=${checkin}&checkout=${checkout}&members=&param1=${param1}&param2=${param2}&param3=${param3}`;
    navigate(url);
  };
  return (
    <div className="w-full relative bg-whitesmoke-100 flex flex-row items-start justify-start py-0 px-0 box-border leading-normal tracking-normal overflow-hidden">
      <main className="w-full flex bg-white flex-col items-start justify-start pt-0 px-0 box-border gap-[1.8px] mq450:h-auto mq900:pb-[304px] mq900:box-border mq1275:pb-[467px] mq1275:box-border">
        <button
          onClick={() => handleMainClick("mumbai")}
          className="absolute top-20 left-10 z-10"
        >
          Tab this for temporary navigation to search page
        </button>
        <Section1 />
        <Section2 />
        <Deals />
        <Staycation />
        <SectionBlog />
        {/* <Section_OtherPlatform /> */}
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
};

export default MainPage;
