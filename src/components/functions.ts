import { usePricingContext } from './PricingContext';

export const useHotelFunctions = () => {
  const { setActiveHotels, bedCounts, setBedCounts, addedHotels, setAddedHotels,setActiveHotels1, bedCounts1, setBedCounts1, addedHotels1, setAddedHotels1 } = usePricingContext();

  const handleAddHotel = (hotelId: number) => {
    setActiveHotels((prevActiveHotels) => {
      const updatedActiveHotels = { ...prevActiveHotels };

      if (updatedActiveHotels[hotelId]) {
        delete updatedActiveHotels[hotelId];
        setAddedHotels((prevAddedHotels) =>
          prevAddedHotels.filter((id) => id !== hotelId)
        );
      } else {
        updatedActiveHotels[hotelId] = true;
        setAddedHotels((prevAddedHotels) => [...prevAddedHotels, hotelId]);

        // Set initial bed count to 1 when adding a hotel
        setBedCounts((prevBedCounts) => ({
          ...prevBedCounts,
          [hotelId]: 1,
        }));
      }

      return updatedActiveHotels;
    });
  };
  const handleAddHotel1 = (hotelId: number) => {
    setActiveHotels1((prevActiveHotels) => {
      const updatedActiveHotels1 = { ...prevActiveHotels };

      if (updatedActiveHotels1[hotelId]) {
        delete updatedActiveHotels1[hotelId];
        setAddedHotels1((prevAddedHotels) =>
          prevAddedHotels.filter((id) => id !== hotelId)
        );
      } else {
        updatedActiveHotels1[hotelId] = true;
        setAddedHotels1((prevAddedHotels) => [...prevAddedHotels, hotelId]);

        // Set initial bed count to 1 when adding a hotel
        setBedCounts1((prevBedCounts) => ({
          ...prevBedCounts,
          [hotelId]: 1,
        }));
      }

      return updatedActiveHotels1;
    });
  };

  const handleBedsIncrement = (hotelId: number, totalBedsAvailable: number) => {
    setBedCounts((prevBedCounts) => {
      const updatedBedCounts = { ...prevBedCounts };
      if (updatedBedCounts[hotelId] !== undefined) {
        // Check if the current bed count is less than the total beds available
        if (updatedBedCounts[hotelId] < totalBedsAvailable) {
          updatedBedCounts[hotelId] += 1;
        }
      } else {
        updatedBedCounts[hotelId] = 1; // Initialize with 1 if not present
      }
      return updatedBedCounts;
    });
  };
  const handleBedsIncrement1 = (hotelId: number, totalBedsAvailable: number) => {
    setBedCounts1((prevBedCounts) => {
      const updatedBedCounts1 = { ...prevBedCounts };
      if (updatedBedCounts1[hotelId] !== undefined) {
        // Check if the current bed count is less than the total beds available
        if (updatedBedCounts1[hotelId] < totalBedsAvailable) {
          updatedBedCounts1[hotelId] += 1;
        }
      } else {
        updatedBedCounts1[hotelId] = 1; // Initialize with 1 if not present
      }
      return updatedBedCounts1;
    });
  };

  const handleBedsDecrement = (hotelId: number) => {
    setBedCounts((prevBedCounts) => {
      const updatedBedCounts = { ...prevBedCounts };
      if (updatedBedCounts[hotelId] > 1) {
        updatedBedCounts[hotelId] -= 1;
      } else {
        // Remove the hotel ID from bedCounts if count is 0
        const { [hotelId]: _, ...rest } = updatedBedCounts;

        // Also remove the hotel ID from activeHotels to show the ADD button again
        setActiveHotels((prevActiveHotels) => {
          const updatedActiveHotels = { ...prevActiveHotels };
          delete updatedActiveHotels[hotelId];
          return updatedActiveHotels;
        });

        setAddedHotels((prevAddedHotels) =>
          prevAddedHotels.filter((id) => id !== hotelId)
        );
        
        return rest;
      }
      return updatedBedCounts;
    });
  };
  const handleBedsDecrement1 = (hotelId: number) => {
    setBedCounts1((prevBedCounts) => {
      const updatedBedCounts1 = { ...prevBedCounts };
      if (updatedBedCounts1[hotelId] > 1) {
        updatedBedCounts1[hotelId] -= 1;
      } else {
        // Remove the hotel ID from bedCounts if count is 0
        const { [hotelId]: _, ...rest } = updatedBedCounts1;

        // Also remove the hotel ID from activeHotels to show the ADD button again
        setActiveHotels1((prevActiveHotels) => {
          const updatedActiveHotels1 = { ...prevActiveHotels };
          delete updatedActiveHotels1[hotelId];
          return updatedActiveHotels1;
        });

        setAddedHotels1((prevAddedHotels) =>
          prevAddedHotels.filter((id) => id !== hotelId)
        );
        
        return rest;
      }
      return updatedBedCounts1;
    });
  };

  return { handleAddHotel, handleBedsIncrement, handleBedsDecrement,handleAddHotel1, handleBedsIncrement1, handleBedsDecrement1 };
};
