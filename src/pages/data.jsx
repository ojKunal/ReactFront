import React, { useEffect, useState } from 'react';
import { fetchData } from '../components/data';

const MainComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      if (result) {
        setData(result);
      } else {
        setError('Failed to fetch data');
      }
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data);

  return (
    <div>
      <h1>Main Component</h1>
      <div>
        <h2>Distinct Facilities</h2>
        <ul>
          {data.distinctFacilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Property Container Data</h2>
        <ul>
          {data.propertyContainerData.map((property, index) => (
            <li key={index}>{property.name} - {property.city_name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Property Page Data</h2>
        <ul>
          {data.propertyPageData.map((property, index) => (
            <li key={index}>{property.name} - {property.city_name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Reviews Data</h2>
        <ul>
          {data.reviewsData.map((review, index) => (
            <li key={index}>{review.user_nickname} - {review.ratingDescription}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainComponent;
