import { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import TitleComponentwithButton from "./TitleComponentwithButton";
import StaycationCard from "./StaycationCard";
import { createClient } from '@supabase/supabase-js';

// Define the type for the tripTypeData
export type TripType = {
  trip_type_id: string;
  trip_type: string;
  thumbnail_url: string;
  hotelids: { [key: string]: any }[];
};

// Define the type for Staycation props
export type StaycationType = {
  className?: string;
};



// Initialize Supabase client

const supabase = createClient(
  "https://ahtnxguebjyvrzcgqany.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodG54Z3VlYmp5dnJ6Y2dxYW55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2MjM4MDEsImV4cCI6MjAyOTE5OTgwMX0.LWMA4r9wPmpyX0SvRZ4xb1jce53tC1lhky1GYTcZ8P4"
);


const Staycation: FunctionComponent<StaycationType> = ({ className = "" }) => {
  const [tripTypes, setTripTypes] = useState<TripType[]>([]);

  useEffect(() => {
    const fetchTripTypes = async () => {
      const { data, error } = await supabase
        .from('triptypes')
        .select('*');

      if (error) {
        console.error(error);
      } else {
        setTripTypes(data as TripType[]);
        console.log(data)
      }
    };

    fetchTripTypes();
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-left text-4xl text-white font-poppins ${className}`}
    >
      <div className="w-[1920px] flex flex-col items-start justify-start gap-[98.3px] max-w-full mq450:gap-[25px] mq900:gap-[49px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16.8px] max-w-full">
          <TitleComponentwithButton
            trendingDestinations="Activity"
            placesThatTravelersAreAdd="Keep it local and visit these destinations closer to home"
            divcnSliderArrowsArrowcnS="/mainpage_icon/divcn--slider--arrows--arrowcn--slider--arrows--disabledcn--slider--arrows--prevarrow-2.svg"
            divcnSliderArrowsArrowcnS1="/mainpage_icon/divcn--slider--arrows--arrowcn--slider--arrows--nextarrow-2.svg"
            propGap="3.3px"
          />
          <div className="w-[1920px] h-[400px] overflow-x-auto shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-5 box-border gap-[20px] max-w-full">
            {tripTypes.map((tripType) => (
              <StaycationCard
                key={tripType.trip_type_id}
                imgcnImageDefault={tripType.thumbnail_url}
                newDelhi={tripType.trip_type}  // Assuming 'newDelhi' represents the trip type name
                properties={`${(tripType.hotelids || []).length} properties`}
                />
            ))}
          </div>
        </div>
        <div className="self-stretch rounded-xl relative [background:linear-gradient(95.99deg,_#e8eded,_#f4f4f4)] overflow-hidden flex flex-row items-start justify-start py-0 px-[60px] box-border gap-[159.4px] max-w-full text-25xl text-slategray-100 mq450:gap-[20px] mq900:gap-[40px] mq1275:gap-[80px] mq1275:pl-[30px] mq1275:pr-[30px] mq1275:box-border mq1600:flex-wrap pb-[30px] mq1000:pb-0 mq650:mb-[50px]">
          <div className="w-[500px] flex flex-col items-start justify-start pt-[39.5px] px-0 pt-[39.5px] box-border min-w-[443.2px] max-w-[500px] shrink-0 mq900:min-w-full mq1600:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[41.7px] max-w-full mq450:gap-[21px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[27.8px]">
                <h1 className="m-0 self-stretch relative text-inherit leading-[53px] font-bold font-inherit mq450:text-7xl mq450:leading-[32px] mq900:text-16xl mq900:leading-[42px]">
                  Millions of places to stay, one app.
                </h1>
                <div className="w-[292px] h-11 relative text-lg tracking-[0.18px] leading-[22px] inline-block">
                  Don’t miss out on mobile-only deals and one-of-a-kind offers.
                </div>
              </div>
              <div className="flex flex-row items-end justify-start gap-[10px] max-w-full text-sm font-inter mq450:flex-wrap">
                <img
                  className="h-[93px] w-[93px] relative overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/mainpage_icon/imgcn--hp--download--info--buttons--qr-1@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[13.1px]">
                  <div className="relative tracking-[0.14px] leading-[21px] font-semibold inline-block min-w-[117px]">
                    Get the app now.
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="self-stretch w-[119px] relative max-h-full overflow-hidden shrink-0 min-h-[40px]"
                      alt=""
                      src="/mainpage_icon/img-2.svg"
                    />
                    <img
                      className="self-stretch w-[135px] relative max-h-full overflow-hidden shrink-0 min-h-[40px]"
                      loading="lazy"
                      alt=""
                      src="/mainpage_icon/img-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[813.6px] absolute mq1000:relative right-0 max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1600:flex-1"
            loading="lazy"
            alt=""
            src="/mainpage_icon/imgcn--hp--download--mobile@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[31.9px] max-w-full text-13xl text-gray-300 font-inter mq900:gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-center mq650:justify-start py-0 pr-[26px] pl-5 mq650:px-0">
            <div className="flex flex-col items-start justify-start gap-[15.5px]">
              <h1 className="m-0 relative text-inherit leading-[39px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px] mq900:text-7xl mq900:leading-[31px]">
                Explore by Trip Type
              </h1>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[7px] text-lg text-gray-100 font-poppins">
                <div className="relative leading-[22px]">
                  Your ideal stay is just a click away!
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[20px] max-w-full grid-cols-[repeat(4,_minmax(265px,_1fr))] text-4xl text-white font-poppins mq900:grid-cols-[minmax(265px,_1fr)] mq1275:justify-center mq1275:grid-cols-[repeat(2,_minmax(265px,_460px))]">
            {tripTypes.map((tripType) => (
              <div key={tripType.trip_type_id} className="rounded-2xl overflow-hidden flex flex-row items-start justify-center pt-[71.4px] px-5 pb-[75.6px] box-border relative max-w-full">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src={tripType.thumbnail_url}
                />
                <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit inline-block min-w-[111px] z-[1] mq450:text-lg mq450:leading-[22px]">
                  {tripType.trip_type.toUpperCase()}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staycation;
