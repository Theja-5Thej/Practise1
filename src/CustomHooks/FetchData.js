import { useEffect, useState } from "react";

export default FetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`HTTP Error! Status: ${response.status}`);
        const result = await response.json();
        setLoading(false);
        console.log(result?.products, "resd");
        setData(result?.products);
      } catch (error) {
        setLoading(false);
        setError("Error -" + error);
        console.log(error);
      }
    };
    getData();
  }, []);
  return { data, loading, error };
};
