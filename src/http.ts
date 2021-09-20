export const fetchSearch = (searchTerm: string): Promise<SearchApiResponse> =>
  fetch(
    `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&json=1&page_size=20&page=1`
  ).then((r) => r.json());

export type SearchApiResponse = {
  products: Product[];
};
export type Product = {
  _id: string;
  image_front_url: string;
  product_name: string;
};

export const fetchProduct = (id: string): Promise<ProductApiResponse> =>
  fetch(`https://world.openfoodfacts.org/api/v0/product/${id}.json`).then((r) =>
    r.json()
  );

export type ProductApiResponse = { id: string; product: Product };
