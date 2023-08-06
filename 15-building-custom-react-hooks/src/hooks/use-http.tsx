import { useCallback, useState } from "react";

type RequestConfigType = {
  url: string;
  method?: string;
  headers?: HeadersInit;
  body?: any;
};

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (
      requestConfig: RequestConfigType,
      applyData: (data: any) => void,
    ) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: JSON.stringify(requestConfig.body)
            ? JSON.stringify(requestConfig.body)
            : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();
        applyData(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [],
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
