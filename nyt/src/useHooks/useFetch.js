import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const asyncReq = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) {
          const resJson = await res.json();
          setData(resJson);
          setLoading(false);
          setError(false);
        } else {
          setLoading(false);
          setError(res.status);
        }
      } catch (e) {
        console.error(e);
        setLoading(false);
        setError(e);
      }
    };
    asyncReq();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
