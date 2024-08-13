// PricingContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { ListFormat } from "typescript";

type PricingContextType = {
  maxPrice1: number;
  setMaxPrice1: (value: number) => void;
  discountPrice1: number;
  setDiscountPrice1: (value: number) => void;
  selectedBeds1: number;
  setSelectedBeds1: (value: number) => void;
  currency1: string;
  setCurrency1: (value: string) => void;
  percent1: number;
  setPercent1: (value: number) => void;
  isDormShow1: boolean;
  setIsDormShow1: (value: boolean) => void;
  doomsName: string;
  setDoomsName: (value: string) => void;

  maxPrice2: number;
  setMaxPrice2: (value: number) => void;
  discountPrice2: number;
  setDiscountPrice2: (value: number) => void;
  selectedBeds2: number;
  setSelectedBeds2: (value: number) => void;
  currency2: string;
  setCurrency2: (value: string) => void;
  percent2: number;
  setPercent2: (value: number) => void;
  isDormShow2: boolean;
  setIsDormShow2: (value: boolean) => void;
  titleName2: string;
  setTitleName2: (value: string) => void;
  selectedDormsData : any[];
  setSelectedDormsData:(value: any[]) => void;
  // handleBedsIncrement: (hotelId: number, totalBedsAvailable: number) => void;
  activeHotels:Record<number, boolean>
  setActiveHotels:React.Dispatch<React.SetStateAction<Record<number, boolean>>>
  bedCounts:Record<number, number>
  setBedCounts: React.Dispatch<React.SetStateAction<Record<number, number>>>
  addedHotels: number[]
  setAddedHotels: React.Dispatch<React.SetStateAction<number[]>>
  activeHotels1:Record<number, boolean>
  setActiveHotels1:React.Dispatch<React.SetStateAction<Record<number, boolean>>>
  bedCounts1:Record<number, number>
  setBedCounts1: React.Dispatch<React.SetStateAction<Record<number, number>>>
  addedHotels1: number[]
  setAddedHotels1: React.Dispatch<React.SetStateAction<number[]>>
};

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export const PricingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [maxPrice1, setMaxPrice1] = useState<number>(0);
  const [discountPrice1, setDiscountPrice1] = useState<number>(0);
  const [selectedBeds1, setSelectedBeds1] = useState<number>(0);
  const [currency1, setCurrency1] = useState<string>('');
  const [percent1, setPercent1] = useState<number>(0);
  const [isDormShow1, setIsDormShow1] = useState<boolean>(false);
  const [doomsName, setDoomsName] = useState<string>("");

  const [maxPrice2, setMaxPrice2] = useState<number>(0);
  const [discountPrice2, setDiscountPrice2] = useState<number>(0);
  const [selectedBeds2, setSelectedBeds2] = useState<number>(0);
  const [currency2, setCurrency2] = useState<string>('');
  const [percent2, setPercent2] = useState<number>(0);
  const [isDormShow2, setIsDormShow2] = useState<boolean>(false);
  const [titleName2, setTitleName2] = useState<string>("");
  const [selectedDormsData, setSelectedDormsData] = useState<any[]>([]);
  const [activeHotels, setActiveHotels] = useState<Record<number, boolean>>({});
  const [bedCounts, setBedCounts] = useState<Record<number, number>>({});
  const [addedHotels, setAddedHotels] = useState<number[]>([]);
  const [activeHotels1, setActiveHotels1] = useState<Record<number, boolean>>({});
  const [bedCounts1, setBedCounts1] = useState<Record<number, number>>({});
  const [addedHotels1, setAddedHotels1] = useState<number[]>([]);


  return (
    <PricingContext.Provider
      value={{
        maxPrice1,
        setMaxPrice1,
        discountPrice1,
        setDiscountPrice1,
        selectedBeds1,
        setSelectedBeds1,
        currency1,
        setCurrency1,
        percent1,
        setPercent1,
        isDormShow1,
        setIsDormShow1,
        doomsName,
        setDoomsName,
        maxPrice2,
        setMaxPrice2,
        discountPrice2,
        setDiscountPrice2,
        selectedBeds2,
        setSelectedBeds2,
        currency2,
        setCurrency2,
        percent2,
        setPercent2,
        isDormShow2,
        setIsDormShow2,
        titleName2,
        setTitleName2,
        selectedDormsData,
        setSelectedDormsData,
        activeHotels,
        setActiveHotels,
        bedCounts,
        setBedCounts,
        addedHotels,
        setAddedHotels,
        activeHotels1,
        setActiveHotels1,
        bedCounts1,
        setBedCounts1,
        addedHotels1,
        setAddedHotels1
        
      }}
    >
      {children}
    </PricingContext.Provider>
  );
};

export const usePricingContext = () => {
  const context = useContext(PricingContext);
  if (context === undefined) {
    throw new Error("usePricingContext must be used within a PricingProvider");
  }
  return context;
};
