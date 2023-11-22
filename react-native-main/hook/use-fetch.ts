import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = <T>({ endpoint }: { endpoint: string }) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://192.168.31.81:8080/api/${endpoint}`
        );
        const responseData: T[] = response.data;
        setData(responseData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading };
};
