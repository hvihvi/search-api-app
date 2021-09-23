import { useEffect, useState } from "react";
import { fetchProduct, Product } from "./http";

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    fetchProduct(id)
      .then((result) => setProduct(result.product))
      .catch((e) => console.log(e)); // TODO handle errors
  }, [id, product]);
  return product;
};
