import { useEffect, useState } from "react";

export const useSearchResult = (searchTerm: string) => {
  const [searchResult, setSearchResult] = useState<ApiResponse>();
  useEffect(() => {
    if (searchTerm.length < 3) return;
    // delay/cleanup to not fetch when the user is still typing
    const timeoutId = setTimeout(() => {
      fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&json=1&page_size=20&page=1`
      )
        .then((r) => r.json())
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
};
