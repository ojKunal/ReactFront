import { useState, useEffect, FunctionComponent } from "react";
import { createClient } from "@supabase/supabase-js";
import TitleComponentwithButton from "./TitleComponentwithButton";
import LondonCard from "./LondonCard";

const supabase = createClient(
  "https://ahtnxguebjyvrzcgqany.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodG54Z3VlYmp5dnJ6Y2dxYW55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2MjM4MDEsImV4cCI6MjAyOTE5OTgwMX0.LWMA4r9wPmpyX0SvRZ4xb1jce53tC1lhky1GYTcZ8P4"
);

interface Deal {
  destination_id: string;
  destination_name: string;
  starting_price: number;
  thumbnail_url: string;
}

export type DestinationType = {
  className?: string;
};

const Deals: FunctionComponent<DestinationType> = ({ className = "" }) => {
  const [deals, setDeals] = useState<Deal[]>([]);

  useEffect(() => {
    const fetchDeals = async () => {
      const { data, error } = await supabase
        .from('destinations')
        .select('*')
        .not('thumbnail_url', 'is', null);
        
      if (error) {
        console.error("Error fetching deals:", error);
      } else {
        console.log(data)
        setDeals(data);
      }
    };

    fetchDeals();
  }, []);

  return (
    <section
      className={`mt-10 self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[4.9px] box-border max-w-full shrink-0 text-left text-13xl text-gray-300 font-inter mq900:pb-[62px] mq900:box-border ${className} overflow-hidden`}
    >
      <div className="w-full flex flex-col items-start justify-start gap-[23px] max-w-full">
        <TitleComponentwithButton
          trendingDestinations="Trending Destinations"
          placesThatTravelersAreAdd="Places that travelers are adding to their bucket lists"
          divcnSliderArrowsArrowcnS="/mainpage_icon/divcn--slider--arrows--arrowcn--slider--arrows--disabledcn--slider--arrows--prevarrow-1.svg"
          divcnSliderArrowsArrowcnS1="/mainpage_icon/divcn--slider--arrows--arrowcn--slider--arrows--nextarrow-1.svg"
        />
        <div className="w-full h-full shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-5 box-border gap-[20px] max-w-full text-base font-poppins">
          <div className="w-full overflow-x-auto flex flex-col items-start justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start gap-[20px]">
              {deals.map((deal) => (
                <LondonCard
                  key={deal.destination_id}
                  imgcnImageDefault={deal.thumbnail_url}
                  london={deal.destination_name}
                  prop={`€${deal.starting_price}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
