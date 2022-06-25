import { useState, useEffect } from "react";

//4 - Custom Hooks

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallfetch] = useState(false);
  const [error, setError] = useState(null);
  const [itemId, setItemId] = useState(null);

  // Loading state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError("Houve um erro ao tentar carregar os dados!");
        console.log(error);
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // 5 - Configuração de chamada FETCH

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
      });

      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        setLoading(true);
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);

        const json = await res.json();
        setCallfetch(json);
        setLoading(false);
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;
        const res = await fetch(deleteUrl, config);

        const json = await res.json();
        setCallfetch(json);
      }
    };
    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};
