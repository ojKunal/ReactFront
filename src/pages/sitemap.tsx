// src/pages/GenerateSitePage.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from "../Utils/SupabaseConfig";

const GenerateSitePage: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.rpc('generate_sitemap'); // Call the Supabase function
        if (error) throw error;
        setData(data);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchData();
  }, []);

  return <>{data}</>; // Return the data directly
};

export default GenerateSitePage;
