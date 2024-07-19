

export const fetchData = async () => {
  try {
    // Fetching distinct facilities from "facilitiesSummary"
    const { data: facilitiesData, error: facilitiesError } = await supabase
      .from('Hostelv2')
      .select('facilitiesSummary')
      .limit(2);

    if (facilitiesError) {
      throw facilitiesError;
    }
    console.log(facilitiesData);
    // Converting facilitiesSummary to distinct facilities
    const distinctFacilities = facilitiesData
      .flatMap(item => item.facilitiesSummary)
      .filter((value, index, self) => self.indexOf(value) === index);

    // Fetching property container data for Bangalore
    const { data: propertyContainerData, error: propertyContainerError } = await supabase
      .from('Hostelv2')
      .select('name, images_url, position, city_name, latitude, longitude, distance_value, distance_units, lowestPricePerNight_value')
      .eq('city_name', 'Bangalore')
      .eq('isactiveonHW', true)
      .order('position', { ascending: false })
      .limit(10);

    if (propertyContainerError) {
      throw propertyContainerError;
    }

    // Fetching property page data for a specific id
    const id = 1; // Replace with the actual id you want to fetch
    const { data: propertyPageData, error: propertyPageError } = await supabase
      .from('Hostelv2')
      .select(`
        name, overview, images_url, city_name, address1, address2, city_country, distance_value, distance_units,
        facilitiesSummary, hbid, latitude, longitude, lowestDormPricePerNight_value, lowestPrivatePricePerNight_value,
        overallRating_numberOfRatings, overallRating_overall, ratingBreakdown_average, ratingBreakdown_clean,
        ratingBreakdown_facilities, ratingBreakdown_fun, ratingBreakdown_location, ratingBreakdown_security,
        ratingBreakdown_staff, ratingBreakdown_value
      `)
      .eq('id', id);

    if (propertyPageError) {
      throw propertyPageError;
    }

    // Fetching reviews for a specific property
    const { data: reviewsData, error: reviewsError } = await supabase
      .from('reviews')
      .select('PropRef, rating, ratingCreated, ratingDescription, user_gender_id, user_nationality_name, user_nickname')
      .eq('PropRef', id);

    if (reviewsError) {
      throw reviewsError;
    }

    // Return all fetched data
    return {
      distinctFacilities,
      propertyContainerData,
      propertyPageData,
      reviewsData
    };

  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
};
