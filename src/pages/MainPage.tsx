import { FunctionComponent } from "react";
import Section1 from "../components/mainpage_components/Section1";
import Section2 from "../components/mainpage_components/Section2";
import Deals from "../components/mainpage_components/Deals";
import Staycation from "../components/mainpage_components/Staycation";
import SectionBlog from "../components/mainpage_components/SectionBlog";
import Section_OtherPlatform from "../components/mainpage_components/Section_OtherPlatform";
import Newsletter from "../components/mainpage_components/Newsletter";
import Footer from "../components/mainpage_components/Footer";

const MainPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke-100 flex flex-row items-start justify-start py-0 px-0 box-border leading-normal tracking-normal overflow-hidden">
      <main className="w-full flex bg-white flex flex-col items-start justify-start pt-0 px-0 box-border gap-[1.8px] mq450:h-auto mq900:pb-[304px] mq900:box-border mq1275:pb-[50px] mq1275:box-border">
        <Section1 />
        <div className="w-full flex bg-white flex flex-col items-start justify-start pt-0 px-0 box-border gap-[1.8px] mq450:h-auto px-[100px] mq1000:px-0 ">
          <Section2 />
          <Deals />
          <Staycation />
          <SectionBlog />
          {/* <Section_OtherPlatform /> */}
          <Newsletter />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
