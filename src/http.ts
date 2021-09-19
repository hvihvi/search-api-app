export const fetchOpenFoodFacts = (searchTerm: string): Promise<ApiResponse> =>
  fetch(
    `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&json=1&page_size=20&page=1`
  ).then((r) => r.json());

export type ApiResponse = {
  products: Product[];
};
export type Product = {
  image_front_url: string;
  product_name: string;
};
