import { ProductImage } from "../../design-system/ProductImage";
import React from "react";
import { EmptyContent } from "./EmptyContent";
import { SearchApiResponse } from "../../http";

export const Results = ({ searchResult }: Props) => (
  <>
    {searchResult?.products.map((product) => (
      <ProductImage product={product} key={product._id} />
    )) ?? <EmptyContent />}
  </>
);

type Props = {
  searchResult?: SearchApiResponse;
};
