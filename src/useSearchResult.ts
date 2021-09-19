import { useEffect, useState } from "react";
import { fetchOpenFoodFacts } from "./http";

export const useSearchResult = (searchTerm: string) => {
  const [searchResult, setSearchResult] = useState<ApiResponse>();
  useEffect(() => {
    if (searchTerm.length < 3) return;
    // delay/cleanup to not fetch when the user is still typing
    const timeoutId = setTimeout(() => {
      fetchOpenFoodFacts(searchTerm)
        .then((result) => setSearchResult(result))
        .catch((e) => console.log(e)); // TODO handle errors
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);
  return searchResult;
};

type ApiResponse = {
  products: Product[];
};
type Product = {
  image_front_url: string;
  product_name: string;
};
