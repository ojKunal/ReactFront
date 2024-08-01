import { FunctionComponent } from "react";
import CategoryHotelCard from "./CategoryHotelCard";
import ScrollableDealsCard from "./ScrollableDealsCard";
import TitleComponentwithButton from "./TitleComponentwithButton";

export type FrameComponent3Type = {
  className?: string;
};

const Section2: FunctionComponent<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section 
    className={`flex flex-row items-start justify-center py-0 px-0 max-w-full text-left text-4xl text-white font-poppins ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start gap-5">
        {/* Recent Searches start */}
        <div className="flex flex-col items-start justify-start gap-4 w-full">
          <h3 className="text-inherit font-bold tracking-tight leading-tight">
            Recent searches
          </h3>
          <div className=" flex-col items-start justify-start gap-1 w-auto text-lg text-gray-100">
            <div className="leading-tight">Continue where you left off</div>
            <div className="flex flex-col items-start justify-start gap-5 w-full text-base text-gray-300">
              <div className="flex flex-col items-start justify-start gap-1 w-full">
                <div className="w-full flex flex-row flex-wrap items-start justify-start gap-4 text-sm text-black font-inter">
                  <div className="flex rounded-2xl shadow-lg flex flex-row items-end justify-start p-4 gap-2 border border-solid border-gainsboro">
                    <div className="flex flex-col items-start justify-end">
                      <img className="w-6 h-6" alt="" src="/mainpage_icon/img.svg" />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2">
                      <div className="flex flex-row items-start justify-start gap-2">
                        <div className="font-semibold">Shalem Miracle Ministries</div>
                        <div className="font-semibold">, India</div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-1 text-xs text-gray-100">
                        <div className="whitespace-nowrap">27 Jul - 28 Jul • 2 guests</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-end">
                      <img className="w-3 h-3" alt="" src="/mainpage_icon/frame-7.svg" />
                    </div>
                  </div>

                  <div className="w-60 shadow-lg rounded-2xl flex flex-row items-end justify-start p-4 gap-2 border border-solid border-gainsboro">
                    <div className="flex flex-col items-start justify-end">
                      <img className="w-6 h-6" alt="" src="/mainpage_icon/img-1.svg" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-start gap-2">
                      <div className="font-semibold">India</div>
                      <div className="flex flex-row items-start justify-start gap-1 text-xs text-gray-100">
                        <div className="whitespace-nowrap">27 Jul - 28 Jul • 2 guests</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-end">
                      <img className="w-3 h-3" alt="" src="/mainpage_icon/frame-8.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deals Parts Section */}
        <ScrollableDealsCard />

        {/* Categorytype Page start */}
        <section 
    className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-0 box-border max-w-full shrink-0 text-left text-13xl text-gray-300 font-inter mq900:pb-[62px] mq900:box-border ${className} overflow-hidden`}
    >
          <div className="w-full flex flex-col items-start justify-start gap-[23px] max-w-full">
            <TitleComponentwithButton
              trendingDestinations="Stay Types"
              placesThatTravelersAreAdd="Plan your next trip with these unmissable CuddlyNest deals"
              divcnSliderArrowsArrowcnS="/mainpage_icon/divcn--slider--arrows--arrowcn--slider--arrows--disabledcn--slider--arrows--prevarrow-1.svg"
              divcnSliderArrowsArrowcnS1="/mainpage_icon/divcn--slider--arrows--arrowcn--slider--arrows--nextarrow-1.svg"
            />
      <div className="w-full h-full shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-5 box-border gap-[20px] max-w-full text-base font-poppins">
      <div className="w-full overflow-x-auto flex flex-col items-start justify-start gap-[20px]">
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <CategoryHotelCard imgcnImageDefault="/mainpage_icon/imgcn--imagedefault@2x.png" hotels="Hotels" properties="1,506,710 properties" />
                  <CategoryHotelCard imgcnImageDefault="/mainpage_icon/imgcn--imagedefault-1@2x.png" hotels="Apartments" properties="237,285 properties" />
                  <CategoryHotelCard imgcnImageDefault="/mainpage_icon/imgcn--imagedefault-2@2x.png" hotels="Vacation homes" properties="236,574 properties" />
                  <CategoryHotelCard imgcnImageDefault="/mainpage_icon/imgcn--imagedefault-3@2x.png" hotels="B&Bs" properties="148,854 properties" />
                  <CategoryHotelCard imgcnImageDefault="/mainpage_icon/imgcn--imagedefault-4@2x.png" hotels="Villas" properties="83,172 properties" />
                  <CategoryHotelCard imgcnImageDefault="/mainpage_icon/imgcn--imagedefault-5@2x.png" hotels="Bungalows" properties="54,770 properties" />
                  <CategoryHotelCard imgcnImageDefault="/mainpage_icon/imgcn--imagedefault-6@2x.png" hotels="Hostels" properties="41,610 properties" />
                  <CategoryHotelCard imgcnImageDefault="/mainpage_icon/imgcn--imagedefault-7@2x.png" hotels="Cabins" properties="4,792 properties" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promise Banner start */}
        <div className="flex flex-row items-center justify-between space-between py-5 max-w-full gap-5 text-4xl text-white rounded-xl bg-mediumturquoise">
          <img className="w-9 h-full object-contain" alt="" src="/mainpage_icon/frame-9@2x.png" loading="lazy" />
          <div className="w-96 flex flex-col items-start justify-start gap-8">
            <h1 className="text-inherit font-bold leading-tight">The CuddlyNest Promise</h1>
            <div className="flex flex-row items-start justify-center px-5 text-lg">
              <div className="leading-tight font-medium">Free cancellation & waived service fees</div>
            </div>
            <div className="flex flex-row items-start justify-center px-5">
              <button className="cursor-pointer pt-2 px-16 pb-2.5 bg-gradient-to-r from-pink-500 to-purple-500 w-52 rounded-3xs flex items-center justify-center text-sm font-semibold text-white">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
