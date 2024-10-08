import { FunctionComponent } from "react";
import CategoryHotelCard from "./CategoryHotelCard";
import ScrollableDealsCard from "./ScrollableDealsCard";
import TitleComponentwithButton from "./TitleComponentwithButton";

export type FrameComponent3Type = {
  className?: string;
};

const Section2: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1920px] self-center flex flex-row items-start justify-center py-0 px-0 mq650:pt-3 max-w-full text-left text-4xl text-white font-poppins ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start gap-5">
        {/* Recent Searches start */}
        <div className="flex flex-col items-start justify-start gap-4 w-full  hide-on-mobile">
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
                      <img
                        className="w-6 h-6"
                        alt=""
                        src="/mainpage_icon/img.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2">
                      <div className="flex flex-row items-start justify-start gap-2">
                        <div className="font-semibold">
                          Shalem Miracle Ministries
                        </div>
                        <div className="font-semibold">, India</div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-1 text-xs text-gray-100">
                        <div className="whitespace-nowrap">
                          27 Jul - 28 Jul • 2 guests
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-end">
                      <img
                        className="w-3 h-3"
                        alt=""
                        src="/mainpage_icon/frame-7.svg"
                      />
                    </div>
                  </div>

                  <div className="w-60 shadow-lg rounded-2xl flex flex-row items-end justify-start p-4 gap-2 border border-solid border-gainsboro">
                    <div className="flex flex-col items-start justify-end">
                      <img
                        className="w-6 h-6"
                        alt=""
                        src="/mainpage_icon/img-1.svg"
                      />
                    </div>
                    <div className="w-full flex flex-col items-start justify-start gap-2">
                      <div className="font-semibold">India</div>
                      <div className="flex flex-row items-start justify-start gap-1 text-xs text-gray-100">
                        <div className="whitespace-nowrap">
                          27 Jul - 28 Jul • 2 guests
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-end">
                      <img
                        className="w-3 h-3"
                        alt=""
                        src="/mainpage_icon/frame-8.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deals Parts Section */}
        {/* <ScrollableDealsCard /> */}

        {/* Categorytype Page start */}
        <section
          className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-0 box-border max-w-full shrink-0 text-left text-13xl text-gray-300 font-inter mq900:pb-[62px] mq650:pb-4 mq900:box-border ${className} overflow-hidden`}
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
                {/* <div className="flex flex-row items-start justify-start gap-[10px]">
                  <CategoryHotelCard
                    imgcnImageDefault="/mainpage_icon/imgcn--imagedefault@2x.png"
                    hotels="Hotels"
                    properties="1,506,710 properties"
                  />
                  <CategoryHotelCard
                    imgcnImageDefault="/mainpage_icon/imgcn--imagedefault-1@2x.png"
                    hotels="Apartments"
                    properties="237,285 properties"
                  />
                  <CategoryHotelCard
                    imgcnImageDefault="/mainpage_icon/imgcn--imagedefault-2@2x.png"
                    hotels="Vacation homes"
                    properties="236,574 properties"
                  />
                  <CategoryHotelCard
                    imgcnImageDefault="/mainpage_icon/imgcn--imagedefault-3@2x.png"
                    hotels="B&Bs"
                    properties="148,854 properties"
                  />
                  <CategoryHotelCard
                    imgcnImageDefault="/mainpage_icon/imgcn--imagedefault-4@2x.png"
                    hotels="Villas"
                    properties="83,172 properties"
                  />
                  <CategoryHotelCard
                    imgcnImageDefault="/mainpage_icon/imgcn--imagedefault-5@2x.png"
                    hotels="Bungalows"
                    properties="54,770 properties"
                  />
                  <CategoryHotelCard
                    imgcnImageDefault="/mainpage_icon/imgcn--imagedefault-6@2x.png"
                    hotels="Hostels"
                    properties="41,610 properties"
                  />
                  <CategoryHotelCard
                    imgcnImageDefault="/mainpage_icon/imgcn--imagedefault-7@2x.png"
                    hotels="Cabins"
                    properties="4,792 properties"
                  />
                </div> */}
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <a href="https://www.tripandthrill.com/search/$city_name?type=hotel&checkin=${checkin}&checkout=${checkout}&members=&param1=Social&param2=exampleParam2&param3=exampleParam3" style={{ textDecoration: 'none' }}>
                  <CategoryHotelCard
                    imgcnImageDefault="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRaUjUThUzHt6J5b5q_v-IPzK72cNEoDVjkBG8FnHdjNFtmUB2yXfw1tUfx2cwpOJEBas&usqp=CAU"
                    hotels="Social"
                    properties="461 hostel"
                  /></a>
                  <a href="https://www.tripandthrill.com/search/$city_name?type=hotel&checkin=${checkin}&checkout=${checkout}&members=&param1=Peaceful&param2=exampleParam2&param3=exampleParam3" style={{ textDecoration: 'none' }}>
                  <CategoryHotelCard
                    imgcnImageDefault="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFfR2-mIN7SoVU9tU-Cg3A-3ApyP21EYpUA&s"
                    hotels="Peaceful"
                    properties="281 hostel"
                  /></a>
                  <a href="https://www.tripandthrill.com/search/$city_name?type=hotel&checkin=${checkin}&checkout=${checkout}&members=&param1=Scenery&param2=exampleParam2&param3=exampleParam3" style={{ textDecoration: 'none' }}>
                  <CategoryHotelCard
                    imgcnImageDefault="https://assets.cntraveller.in/photos/60ba183bbfe773a828a46960/16:9/w_1280,c_limit/Chittoor%20palace2-1366x768.jpg"
                    hotels="Scenery"
                    properties="266 hostel"
                  /></a>
                  <a href="https://www.tripandthrill.com/search/$city_name?type=hotel&checkin=${checkin}&checkout=${checkout}&members=&param1=Party&param2=exampleParam2&param3=exampleParam3" style={{ textDecoration: 'none' }}>
                  <CategoryHotelCard
                    imgcnImageDefault="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfpIimeXKs0AtKN2tvhFoF-dlf0LycDBcHw&s"
                    hotels="Party"
                    properties="141 hostel"
                  /></a>
                  <a href="https://www.tripandthrill.com/search/$city_name?type=hotel&checkin=${checkin}&checkout=${checkout}&members=&param1=Relax&param2=exampleParam2&param3=exampleParam3" style={{ textDecoration: 'none' }}>
                  <CategoryHotelCard
                    imgcnImageDefault="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROpkSxjERXrZsbsULDJfAw-m_pNJ2NTscKng&s"
                    hotels="Relax"
                    properties="60 hostel"
                  /></a>
                  <a href="https://www.tripandthrill.com/search/$city_name?type=hotel&checkin=${checkin}&checkout=${checkout}&members=&param1=Staycation&param2=exampleParam2&param3=exampleParam3" style={{ textDecoration: 'none' }}>
                  <CategoryHotelCard
                    imgcnImageDefault="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/06/27163419/Untitled-design-2022-06-27T163343.802.jpg"
                    hotels="Staycation"
                    properties="10 hostel"
                  /></a>
                  <a href="https://www.tripandthrill.com/search/$city_name?type=hotel&checkin=${checkin}&checkout=${checkout}&members=&param1=Workstation&param2=exampleParam2&param3=exampleParam3" style={{ textDecoration: 'none' }}>
                  <CategoryHotelCard
                    imgcnImageDefault="https://imgmedia.lbb.in/media/2020/11/5fb500f9707d4d1d55200d67_1605697785018.jpg"
                    hotels="Workstation"
                    properties="3 hostel"
                  /></a>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Promise Banner start */}
        <div className="w-full px-[50px] mq650:px-[20px] mq1000:mx-5 mq1000:w-[95%] flex flex-row h-[350px] items-center self-center justify-between py-5 pb-[30px] mq1920:mx-5 max-w-full gap-5 text-4xl text-white rounded-xl bg-mediumturquoise box-border">
          <div className="w-[50%] flex flex-col items-center justify-center gap-3">
            <h1 className="text-23xl my-0 font-bold h-auto mq650:text-9xl mq650:mb-0">
              The TripThrill Promise
            </h1>
            <div className="flex flex-row items-start justify-center text-lg">
              <div className="font-medium">
                Free cancellation & waived service fees
              </div>
            </div>
            {/* <div className="flex flex-row items-start justify-center w-full">
              <button className="cursor-pointer pt-3 px-8 mq650:w-full w-[200px] pb-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xs flex items-center justify-center text-sm font-semibold text-white">
                See more
              </button>
            </div> */}
          </div>
          <img
            className="w-[50%] h-[80%] object-contain"
            alt=""
            src="/mainpage_icon/frame-9@2x.png"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
