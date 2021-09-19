export const fetchOpenFoodFacts = (searchTerm: string) =>
  fetch(
    `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&json=1&page_size=20&page=1`
  ).then((r) => r.json());
