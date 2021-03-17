import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    const asyncReq = async () => {
      try {
        const res = await fetch(url, { signal });
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
        if(e.name === 'AbortError') {
          controller.abort()
        } else {
        setLoading(false);
        setError(e);
        }
      }
    };
    asyncReq();
    return () => controller.abort();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
