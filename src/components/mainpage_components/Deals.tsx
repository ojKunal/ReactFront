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

  // Helper function to calculate and format next weekend dates
  const getNextWeekend = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
    const checkinDate = new Date(today);
    checkinDate.setDate(today.getDate() + daysUntilSaturday);
    
    const checkoutDate = new Date(checkinDate);
    checkoutDate.setDate(checkinDate.getDate() + 1);

    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    return {
      checkin: formatDate(checkinDate),
      checkout: formatDate(checkoutDate),
    };
  };

  const { checkin, checkout } = getNextWeekend();


  return (
    <section
      className={`w-[1920px] self-center mt-10 flex flex-row items-start justify-center pt-0 px-5 pb-[4.9px] box-border max-w-full shrink-0 text-left text-13xl text-gray-300 font-inter mq900:pb-[62px] mq900:box-border ${className} overflow-hidden`}
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
              {deals.map((deal) => {
                const destinationUrl = `https://www.tripandthrill.com/search/${deal.destination_name}?type=hotel&checkin=${checkin}&checkout=${checkout}&members=&param1=exampleParam1&param2=exampleParam2&param3=exampleParam3`;
                return (
                <a href={destinationUrl} key={deal.destination_id} style={{ textDecoration: 'none' }}>

                <LondonCard
                  key={deal.destination_id}
                  imgcnImageDefault={deal.thumbnail_url}
                  london={deal.destination_name}
                  prop={`Rs ${deal.starting_price}`}
                />
                </a>
                );
})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
