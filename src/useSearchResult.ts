import { useEffect, useState } from "react";
import { fetchSearch, SearchApiResponse } from "./http";

export const useSearchResult = (searchTerm: string) => {
  const [searchResult, setSearchResult] = useState<SearchApiResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (searchTerm.length < 3) return;
    // delay/cleanup to not fetch when the user is still typing
    const timeoutId = setTimeout(() => {
      setLoading(true);
      fetchSearch(searchTerm)
        .then((result) => setSearchResult(result))
        .then(() => setLoading(false))
        .catch((e) => console.log(e)); // TODO handle errors
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);
  return { searchResult, loading };
};
